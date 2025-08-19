import Phaser from 'phaser';
import {SCENE_KEYS} from '../../common';
import {Background} from '../background';

export class GameScene extends Phaser.Scene {
  //@ts-ignore
  private background: Background;

  constructor() {
    super(SCENE_KEYS.GAME_SCENE);
  }
  create() {
    this.background = new Background(this);
  }
}
