import Phaser from 'phaser';
import {GameScene, PreloadScene} from './scenes';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 1280,
  height: 768,
  parent: 'game-container',
  backgroundColor: '#000000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [PreloadScene, GameScene],
};

const StartGame = (parent: string) => {
  return new Phaser.Game({...config, parent});
};

export default StartGame;
