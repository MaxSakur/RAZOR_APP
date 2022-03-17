import moveSound from './../assets/sounds/FF7CursorMove.mp3';
import clickSound from './../assets/sounds/FF7CursorSaveLoad.mp3';

export const playCursorSound = async (click = false) => {
  let move = new Audio();
  move.src = click ? clickSound : moveSound;
  await move.play();
};
