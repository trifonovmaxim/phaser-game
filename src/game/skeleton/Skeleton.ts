import Phaser from 'phaser';
import {ASSET_KEYS} from '../../common';

export class Skeleton {
  private scene: Phaser.Scene;
  private sprite: Phaser.GameObjects.Sprite;
  private targetPosition: {x: number; y: number} | null = null;
  private speed: number = 400;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.createSkeleton();
  }

  private createSkeleton() {
    this.sprite = this.scene.add
      .sprite(0, 0, ASSET_KEYS.SKELETON_IDLE, 0)
      .setOrigin(0.5, 1)
      .setScale(0.5)
      .play(ASSET_KEYS.SKELETON_IDLE);

    const centerX = this.scene.scale.width / 2;
    const centerY = this.scene.scale.height / 2;
    this.sprite.setPosition(centerX, centerY);
  }

  public getTargetPositionToMove(x: number, y: number) {
    this.targetPosition = {x, y};
    this.sprite.play(ASSET_KEYS.SKELETON_WALK, true);
    if (x < this.sprite.x) {
      this.sprite.setFlipX(true);
    } else {
      this.sprite.setFlipX(false);
    }
  }

  public move() {
    if (!this.targetPosition) return;

    const direction = new Phaser.Math.Vector2(
      this.targetPosition.x - this.sprite.x,
      this.targetPosition.y - this.sprite.y
    );

    const distance = direction.length();

    if (distance < 5) {
      this.sprite.setPosition(this.targetPosition.x, this.targetPosition.y);
      this.targetPosition = null;
      this.sprite.play(ASSET_KEYS.SKELETON_IDLE, true);
      return;
    }

    direction.normalize();
    this.sprite.setPosition(
      this.sprite.x +
        (direction.x * this.speed * this.scene.game.loop.delta) / 1000,
      this.sprite.y +
        (direction.y * this.speed * this.scene.game.loop.delta) / 1000
    );
  }
}
