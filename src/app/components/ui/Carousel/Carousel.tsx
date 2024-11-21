import * as React from "react"

import { Card, CardContent } from "../card"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./index"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-4"
    >
      <CarouselContent className="h-[200px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <div className="">
              <Card className="h-[88px]">
                <CardContent className="items-center justify-center align-middle">
                  <div className="grid grid-rows-1 grid-flow-col justify-center align-middle items-center p-5">
                    <div className="flex items-center justify-center align-middle rounded-xl bg-white/40 text-card-foreground h-[50px] w-[50px]">
                      <Image src="/icon-marketing.png" alt="Icon" width={30} height={30} />
                    </div>
                    <p className="text-[16px] text-white pl-4">해외 마케팅</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
