import Phaser from 'phaser';
import {ASSET_KEYS} from '../../common';

export class Skeleton {
  private scene: Phaser.Scene;
  //@ts-ignore
  private sprite: Phaser.GameObjects.Sprite;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.createSkeleton();
  }

  private createSkeleton() {
    this.sprite = this.scene.add
      .sprite(0, 0, ASSET_KEYS.SKELETON_WALK, 0)
      .setOrigin(0)
      .setScale(0.5)
      .play(ASSET_KEYS.SKELETON_WALK);
  }
}
