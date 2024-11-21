"use client"

import Divider from "./components/ui/Divider/Divider";
import { CarouselSize } from "./components/ui/Carousel/Carousel";
import ResponsiveCarousel from "./components/ui/Slide/Slide";
import { FadeText } from "./components/ui/fade-text";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] w-full min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-[#26C2B9] to-[#288BE7]">
      <main className="flex flex-col gap-4 sm:items-start">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="grid grid-rows-1">
            <div className="columns-2">
              <div className="grid grid-rows-1 gap-2">
                <div className="text-[48px] text-white font-semibold">
                  <FadeText
                    className="text-[48px] text-white dark:text-white font-semibold"
                    direction="up"
                    framerProps={{
                      show: { transition: { delay: 0.5 } },
                    }}
                    text="최고의 실력을 가진 외국인 인재를 찾고 계신가요?"
                  />
                </div>
                <div className="text-[24px] text-white font-semibold">
                  <FadeText
                    className="text-[21px] text-white dark:text-white font-semibold"
                    direction="up"
                    framerProps={{
                      show: { transition: { delay: 0.5 } },
                    }}
                    text="법률 및 인사관리 부담없이
                  1주일 이내에 원격으로 채용해보세요."
                  />
                </div>
                <FadeText
                  className="underline underline-offset-4 text-[16px] text-white"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.5 } },
                  }}
                  text="개발자가 필요하신가요?"
                />
                <div className="grid grid-rows-1 grid-flow-col gap-4 items-center text-white">
                  <div className="items-center">
                    <Divider></Divider>
                    <FadeText
                      className="text-[18px] font-semibold text-white"
                      direction="up"
                      framerProps={{
                        show: { transition: { delay: 0.5 } },
                      }}
                      text="평균 월 120만원"
                    />
                    <FadeText
                      className="text-[16px] text-white"
                      direction="up"
                      framerProps={{
                        show: { transition: { delay: 0.5 } },
                      }}
                      text="임금을 해당 국가를 기준으로 계산합니다."
                    />
                  </div>
                  <div className="items-center text-justify">
                    <Divider></Divider>
                    <FadeText
                      className="text-[18px] font-semibold text-white"
                      direction="up"
                      framerProps={{
                        show: { transition: { delay: 0.5 } },
                      }}
                      text="최대 3회 인력교체"
                    />
                    <FadeText
                      className="text-[16px] text-white"
                      direction="up"
                      framerProps={{
                        show: { transition: { delay: 0.5 } },
                      }}
                      text="막상 채용해보니 맞지 않아도 걱정하지 마세요."
                    />
                  </div>
                  <div className="items-center">
                    <Divider></Divider>
                    <FadeText
                      className="text-[18px] font-semibold text-white"
                      direction="up"
                      framerProps={{
                        show: { transition: { delay: 0.5 } },
                      }}
                      text="평균 3일, 최대 10일"
                    />
                    <FadeText
                      className="text-[16px] text-white"
                      direction="up"
                      framerProps={{
                        show: { transition: { delay: 0.5 } },
                      }}
                      text="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-1">
                <ResponsiveCarousel></ResponsiveCarousel>
              </div>
            </div>
            <div className="items-center pt-8">
              <CarouselSize />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
