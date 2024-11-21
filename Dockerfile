# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./public /app/public
COPY ./app /app/app
COPY ./protos /app/protos
COPY ./google /app/google
COPY ./next.config.mjs /app/next.config.mjs
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./postcss.config.mjs /app/postcss.config.mjs
COPY ./tailwind.config.ts /app/tailwind.config.ts
COPY ./tsconfig.json /app/tsconfig.json


RUN npm run build


