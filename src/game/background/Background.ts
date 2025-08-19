import Phaser from 'phaser';
import {ASSET_KEYS} from '../../common';

export class Background {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.createBackground();
  }

  private createBackground() {
    this.scene.add
      .image(0, 0, ASSET_KEYS.BG_SKY)
      .setOrigin(0)
      .setScale(0.35, 0.35);
    this.scene.add
      .image(0, 40, ASSET_KEYS.BG_FLOOR)
      .setOrigin(0)
      .setScale(0.35, 0.4);
    this.scene.add
      .image(0, 0, ASSET_KEYS.BG_TREES)
      .setOrigin(0)
      .setScale(0.35, 0.35);
    this.scene.add
      .image(0, 580, ASSET_KEYS.BG_BUSHES)
      .setOrigin(0)
      .setScale(0.35, 0.35);
  }
}
