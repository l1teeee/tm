export type StoryState = "negro" | "boca" | "sudor" | "corte" | "velo" | "blanco";

export type StoryLayer = {
  src: string;
  width: number;
  height: number;
  state: StoryState;
  displayHeight: number;
  offsetX: number;
  offsetY: number;
};

export const storyLayers: readonly StoryLayer[] = [
  { src: "/story/cosmos_1041669523.webp", width: 1334, height: 2000, state: "negro", displayHeight: 78, offsetX: -24, offsetY: 0 },
  { src: "/story/cosmos_1705511295.webp", width: 1080, height: 1350, state: "negro", displayHeight: 56, offsetX: 22, offsetY: -16 },
  { src: "/story/cosmos_1425309828.webp", width: 1600, height: 2000, state: "negro", displayHeight: 62, offsetX: 4, offsetY: 14 },
  { src: "/story/cosmos_1565398426.webp", width: 2520, height: 3150, state: "negro", displayHeight: 48, offsetX: -34, offsetY: -20 },
  { src: "/story/cosmos_594814535.webp", width: 1080, height: 1349, state: "negro", displayHeight: 44, offsetX: 33, offsetY: 20 },
  { src: "/story/cosmos_1801276772.webp", width: 338, height: 600, state: "negro", displayHeight: 42, offsetX: -8, offsetY: -24 },
  { src: "/story/cosmos_896630980.webp", width: 750, height: 418, state: "negro", displayHeight: 24, offsetX: -26, offsetY: 30 },
  { src: "/story/cosmos_1365453116.webp", width: 918, height: 516, state: "boca", displayHeight: 40, offsetX: 10, offsetY: -8 },
  { src: "/story/cosmos_1257267219.webp", width: 1080, height: 1330, state: "boca", displayHeight: 46, offsetX: -30, offsetY: 10 },
  { src: "/story/cosmos_228095618.webp", width: 1200, height: 630, state: "boca", displayHeight: 30, offsetX: 24, offsetY: 26 },
  { src: "/story/cosmos_1874931732.webp", width: 750, height: 750, state: "boca", displayHeight: 38, offsetX: 32, offsetY: -24 },
  { src: "/story/cosmos_725154010.webp", width: 1098, height: 1542, state: "boca", displayHeight: 54, offsetX: -12, offsetY: -14 },
  { src: "/story/cosmos_1141101369.gif", width: 998, height: 627, state: "boca", displayHeight: 34, offsetX: -22, offsetY: 26 },
  { src: "/story/cosmos_1002428627.webp", width: 428, height: 428, state: "boca", displayHeight: 28, offsetX: 2, offsetY: 28 },
  { src: "/story/cosmos_1982479830.webp", width: 500, height: 725, state: "boca", displayHeight: 36, offsetX: 36, offsetY: 4 },
  { src: "/story/cosmos_275737823.webp", width: 474, height: 474, state: "boca", displayHeight: 28, offsetX: -36, offsetY: -28 },
  { src: "/story/cosmos_1734669143.webp", width: 1080, height: 1347, state: "boca", displayHeight: 50, offsetX: 14, offsetY: 6 },
  { src: "/story/cosmos_1771158487.webp", width: 628, height: 480, state: "boca", displayHeight: 34, offsetX: -6, offsetY: 0 },
  { src: "/story/cosmos_1796332891.webp", width: 1080, height: 1350, state: "sudor", displayHeight: 66, offsetX: -26, offsetY: -6 },
  { src: "/story/cosmos_554352609.webp", width: 1080, height: 1350, state: "sudor", displayHeight: 58, offsetX: 26, offsetY: 10 },
  { src: "/story/cosmos_586359174.webp", width: 1080, height: 1338, state: "sudor", displayHeight: 48, offsetX: 0, offsetY: -20 },
  { src: "/story/cosmos_2106244375.webp", width: 1080, height: 1350, state: "sudor", displayHeight: 60, offsetX: -10, offsetY: 14 },
  { src: "/story/cosmos_1371930416.webp", width: 1080, height: 1437, state: "sudor", displayHeight: 70, offsetX: 14, offsetY: -8 },
  { src: "/story/cosmos_1549952516.webp", width: 1323, height: 1568, state: "sudor", displayHeight: 50, offsetX: -32, offsetY: 18 },
  { src: "/story/cosmos_1932176197.webp", width: 1080, height: 1454, state: "corte", displayHeight: 92, offsetX: 0, offsetY: 0 },
  { src: "/story/cosmos_1297451372.webp", width: 1122, height: 2000, state: "velo", displayHeight: 74, offsetX: 30, offsetY: -4 },
  { src: "/story/cosmos_727412986.webp", width: 1003, height: 1215, state: "velo", displayHeight: 52, offsetX: -28, offsetY: -18 },
  { src: "/story/cosmos_1419258762.webp", width: 727, height: 723, state: "velo", displayHeight: 38, offsetX: -4, offsetY: 26 },
  { src: "/story/cosmos_1822205335.webp", width: 920, height: 1200, state: "velo", displayHeight: 58, offsetX: 10, offsetY: -14 },
  { src: "/story/cosmos_451212490.webp", width: 1080, height: 1351, state: "velo", displayHeight: 46, offsetX: -34, offsetY: 20 },
  { src: "/story/cosmos_770890050.webp", width: 1280, height: 1912, state: "velo", displayHeight: 76, offsetX: -14, offsetY: 2 },
  { src: "/story/cosmos_1215452768.webp", width: 1080, height: 1433, state: "velo", displayHeight: 64, offsetX: 22, offsetY: 12 },
  { src: "/story/cosmos_1331398010.webp", width: 1406, height: 1406, state: "velo", displayHeight: 50, offsetX: 2, offsetY: -18 },
  { src: "/story/cosmos_1264264785.webp", width: 1080, height: 1345, state: "blanco", displayHeight: 72, offsetX: 20, offsetY: 0 },
  { src: "/story/cosmos_1472495303.webp", width: 540, height: 398, state: "blanco", displayHeight: 28, offsetX: -30, offsetY: -24 },
  { src: "/story/cosmos_434296171.webp", width: 1080, height: 791, state: "blanco", displayHeight: 40, offsetX: -20, offsetY: 20 },
  { src: "/story/cosmos_1808664832.webp", width: 540, height: 540, state: "blanco", displayHeight: 34, offsetX: 34, offsetY: -26 },
  { src: "/story/cosmos_4520575.webp", width: 1080, height: 1351, state: "blanco", displayHeight: 60, offsetX: -8, offsetY: -6 },
  { src: "/story/cosmos_695639136.webp", width: 540, height: 791, state: "blanco", displayHeight: 50, offsetX: 30, offsetY: 18 },
  { src: "/story/cosmos_954942452.webp", width: 800, height: 600, state: "blanco", displayHeight: 26, offsetX: -34, offsetY: 2 },
  { src: "/story/cosmos_609348385.webp", width: 735, height: 488, state: "blanco", displayHeight: 40, offsetX: 0, offsetY: 4 },
];

export const stateHoldMs: Record<StoryState, number> = {
  negro: 1400,
  boca: 600,
  sudor: 1000,
  corte: 2200,
  velo: 1200,
  blanco: 1700,
};
