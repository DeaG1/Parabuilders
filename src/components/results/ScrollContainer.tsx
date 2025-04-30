"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollContainerProps {
  children: ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const cardWidth = 340;
  const gap = 96;
  const scrollStep = cardWidth + gap;

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsAtStart(scrollLeft <= 10);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollPosition();
    const scroller = scrollRef.current;
    scroller?.addEventListener("scroll", checkScrollPosition);
    return () => {
      scroller?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const element = scrollRef.current;

    const currentScroll = element.scrollLeft;
    const currentIndex = Math.round(currentScroll / scrollStep);
    const nextIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;

    const targetScroll = nextIndex * scrollStep;

    element.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => {
      checkScrollPosition();
    }, 500);
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-24 no-scrollbar snap-x snap-mandatory scroll-smooth px-6 h-[200px] touch-pan-x"
      >
        {children}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8 px-3">
        <button
          onClick={() => scroll("left")}
          disabled={isAtStart}
          className={`p-2 rounded-full ${isAtStart ? "bg-gray-400" : "bg-[var(--color-primary)]"} transition-colors`}
        >
          <ChevronLeft className="text-white w-7 h-7" />
        </button>
        <div className="h-[1px] w-full bg-[var(--color-primary)] opacity-50" />
        <button
          onClick={() => scroll("right")}
          disabled={isAtEnd}
          className={`p-2 rounded-full ${isAtEnd ? "bg-gray-400" : "bg-[var(--color-primary)]"} transition-colors`}
        >
          <ChevronRight className="text-white w-7 h-7" />
        </button>
      </div>
    </>
  );
}