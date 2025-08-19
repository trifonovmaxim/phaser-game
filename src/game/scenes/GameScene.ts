import Phaser from 'phaser';
import {SCENE_KEYS} from '../../common';
import {Background} from '../background';
import {Skeleton} from '../skeleton';

export class GameScene extends Phaser.Scene {
  //@ts-ignore
  private background: Background;
   //@ts-ignore
  private skeleton: Skeleton;

  constructor() {
    super(SCENE_KEYS.GAME_SCENE);
  }
  create() {
    this.background = new Background(this);
    this.skeleton = new Skeleton(this);
  }
}
