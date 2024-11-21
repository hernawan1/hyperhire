import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { Button } from "../button";
import {ChevronLeft,ChevronRight } from "lucide-react";
import Image from "next/image";
import { Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger, } from "../Tooltip/Tooltip";

export const data = [
  {
    cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
    title: "Interstaller",
  },
  {
    cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
    title: "Inception",
  },
  {
    cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
    title: "Blade Runner 2049",
  },
  {
    cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
    title: "Icon man 3",
  },
  {
    cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
    title: "Venom",
  },
  {
    cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
    title: "Steins Gate",
  },
  {
    cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
    title: "One Punch Man",
  },
  {
    cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
    title: "A Silent Voice",
  },
  {
    cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
    title: "Demon Slayer",
  },
  {
    cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
    title: "Attack On Titan",
  },
];


export default function ResponsiveCarousel(props) {
  const ref = React.useRef();
  return (
    <div style={{ width: "80%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 2;
          if (parentWidth <= 1440) currentVisibleSlide = 2;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={240}
              carouselWidth={parentWidth}
              data={data}
              maxVisibleSlide={3}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <Button
          className="bg-transparent"
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
          onClick={() => {
            ref.current?.goNext();
          }}
        >
          <ChevronLeft></ChevronLeft>
        </Button>
        <Button
          className="bg-transparent"
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          onClick={() => {
            ref.current?.goBack(6);
          }}
        >
          <ChevronRight></ChevronRight>
        </Button>
      </>
    </div>
  );
}

export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger> 
          <div
              style={{
                width: 220,
                height: 300,
                userSelect: "none",
                background:"white",
                borderRadius:"15px",
              }}
              className="shadow justify-items-center"
            >
              <Image className="pt-4" src="/avatar.png" alt="Icon" width={80} height={80} />
              <p className="text-[18px] font-extrabold pt-2">Abhishek Gupta</p>
              <div className="grid grid-cols-2">
                <p className="text-[12px] text-[#4A77FF] font-semibold">마케팅</p>
                <p className="text-[12px] text-[#4A77FF] font-extrabold"> · 2y+</p>
              </div>
              <div className="grid grid-rows-2 pt-6 gap-1">
                <div className="rounded-[8px] border-2">
                  <p className="p-1 text-[10px]">마케팅 콘텐츠 제작</p>
                </div>
                <div className="rounded-[8px] border-2">
                  <p className="p-1 text-[10px]">마케팅 콘텐츠 제작</p>
                </div>
              </div>
              <div className="columns-2 pt-1">
                <div className="rounded-[8px] border-2">
                    <p className="p-1 text-[10px]">마케팅 콘텐츠 제작</p>
                  </div>
                  <div className="rounded-[8px] border-2">
                    <p className="p-1 text-[10px]">마케팅 콘텐츠 제작</p>
                  </div>
                </div>
            </div></TooltipTrigger>
            <TooltipContent>
            </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
});