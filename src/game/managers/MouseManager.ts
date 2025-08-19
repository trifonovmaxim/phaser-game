import Phaser from 'phaser';
import {Skeleton} from '../skeleton';

export class MouseManager {
  private scene: Phaser.Scene;
  private skeleton: Skeleton;

  constructor(scene: Phaser.Scene, skeleton: Skeleton) {
    this.scene = scene;
    this.skeleton = skeleton;
    this.createMouseManager();
  }

  private createMouseManager() {
    this.scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      if (pointer.leftButtonDown()) {
        this.skeleton.getTargetPositionToMove(pointer.worldX, pointer.worldY);
      }
    });
  }
}
