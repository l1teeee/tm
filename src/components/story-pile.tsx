"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { stateHoldMs, storyLayers, type StoryLayer } from "@/content/story";

const PRELOAD_AHEAD = 6;
const LOOP_HOLD_MS = 4000;

function sheetPlacement(layer: StoryLayer): CSSProperties {
  return {
    "--display-height": layer.displayHeight,
    "--aspect-ratio": layer.width / layer.height,
    "--offset-x": layer.offsetX,
    "--offset-y": layer.offsetY,
  } as CSSProperties;
}

export function StoryPile() {
  const [visibleCount, setVisibleCount] = useState(1);
  useEffect(() => {
    const isPileComplete = visibleCount === storyLayers.length;
    const holdMs = isPileComplete
      ? LOOP_HOLD_MS
      : stateHoldMs[storyLayers[visibleCount - 1].state];
    const nextCount = isPileComplete ? 1 : visibleCount + 1;
    const dropNextSheet = setTimeout(() => setVisibleCount(nextCount), holdMs);
    return () => clearTimeout(dropNextSheet);
  }, [visibleCount]);

  const mountedLayers = storyLayers.slice(0, visibleCount + PRELOAD_AHEAD);

  return (
    <section
      aria-label="Sobreexposicion"
      className="pile relative h-svh overflow-hidden"
    >
      {mountedLayers.map((layer, index) => (
        <Image
          key={layer.src}
          src={layer.src}
          alt=""
          width={layer.width}
          height={layer.height}
          sizes="(orientation: portrait) 52vw, 44vw"
          loading="eager"
          unoptimized={layer.src.endsWith(".gif")}
          className="pile-sheet"
          data-state={layer.state}
          data-visible={index < visibleCount}
          style={sheetPlacement(layer)}
        />
      ))}
    </section>
  );
}
