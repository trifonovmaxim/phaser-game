import Phaser from 'phaser';
import {SCENE_KEYS} from '../../common';
import {Background} from '../background';
import {Skeleton} from '../skeleton';
import {MouseManager} from '../managers';

export class GameScene extends Phaser.Scene {
  //@ts-ignore
  private background: Background;
  private skeleton: Skeleton;
  //@ts-ignore
  private mouseManager: MouseManager;

  constructor() {
    super(SCENE_KEYS.GAME_SCENE);
  }
  create() {
    this.background = new Background(this);
    this.skeleton = new Skeleton(this);
    this.mouseManager = new MouseManager(this, this.skeleton);
  }

  update() {
    this.skeleton.move();
  }
}
