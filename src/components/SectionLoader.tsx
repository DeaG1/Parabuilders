"use client";

import { useEffect, useState, ReactElement } from "react";

interface SectionLoaderProps {
  shouldRender: boolean;
  onReady?: () => void;
  children: ReactElement;
}

export default function SectionLoader({ shouldRender, onReady, children }: SectionLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldRender && !isVisible) {
      setIsVisible(true);
    }
  }, [shouldRender, isVisible]);

  useEffect(() => {
    if (isVisible) {
      onReady?.();
    }
  }, [isVisible, onReady]);

  return isVisible ? children : null;
}
