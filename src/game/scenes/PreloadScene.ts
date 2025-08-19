import Phaser from 'phaser';
import {IMAGE_ASSETS, SCENE_KEYS} from '../../common';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENE_KEYS.PRELOAD_SCENE);
  }

  init() {}

  preload() {
    // IMAGE_ASSETS.forEach((asset) => {
    //   this.load.image(asset.assetKey, asset.path);
    // });
    // AUDIO_ASSETS.forEach((asset) => {
    //   this.load.audio(asset.assetKey, asset.path);
    // });
    // SPRITESHEET_ASSETS.forEach((asset) => {
    //   this.load.spritesheet(asset.assetKey, asset.path, {
    //     frameWidth: asset.frameWidth,
    //     frameHeight: asset.frameHeight,
    //   });
    // });

    IMAGE_ASSETS.forEach((asset) => {
      this.load.image(asset.assetKey, asset.path);
    });
  }

  create() {
    // SPRITESHEET_ASSETS.forEach((asset) => {
    //   this.anims.create({
    //     key: asset.assetKey,
    //     frames: this.anims.generateFrameNames(asset.assetKey),
    //     frameRate: asset.frameRate,
    //     repeat: asset.repeat,
    //   });
    // });
    // this.sound.play(ASSET_KEYS.BACKGROUND_MUSIC, {
    //   loop: true,
    //   volume: 0.2,
    // });
    this.scene.start(SCENE_KEYS.GAME_SCENE);
  }
}
