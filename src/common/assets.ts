export const ASSET_KEYS = {
  BG_BUSHES: 'BG_BUSHES',
  BG_FLOOR: 'BG_FLOOR',
  BG_SKY: 'BG_SKY',
  BG_TREES: 'BG_TREES',
} as const;

export const IMAGE_ASSETS = [
  {
    assetKey: ASSET_KEYS.BG_BUSHES,
    path: 'assets/background/bg_bushes.png',
  },
  {
    assetKey: ASSET_KEYS.BG_FLOOR,
    path: 'assets/background/bg_floor.png',
  },
  {
    assetKey: ASSET_KEYS.BG_SKY,
    path: 'assets/background/bg_sky.png',
  },
  {
    assetKey: ASSET_KEYS.BG_TREES,
    path: 'assets/background/bg_trees.png',
  },
];
