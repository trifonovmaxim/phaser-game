export const ASSET_KEYS = {
  BG_BUSHES: 'BG_BUSHES',
  BG_FLOOR: 'BG_FLOOR',
  BG_SKY: 'BG_SKY',
  BG_TREES: 'BG_TREES',
  SKELETON_WALK: 'SKELETON_WALK',
  SKELETON_IDLE: 'SKELETON_IDLE',
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
] as const;

export const SPRITESHEET_ASSETS = [
  {
    assetKey: ASSET_KEYS.SKELETON_WALK,
    frameWidth: 900,
    frameHeight: 900,
    path: 'assets/skeleton/skeleton_walk.png',
    frameRate: 24,
    repeat: -1,
  },
  {
    assetKey: ASSET_KEYS.SKELETON_IDLE,
    frameWidth: 900,
    frameHeight: 900,
    path: 'assets/skeleton/skeleton_idle.png',
    frameRate: 24,
    repeat: -1,
  },
];
