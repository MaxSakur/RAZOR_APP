import React from 'react';
import { playCursorSound } from '../../utils/moveCursorSound';

export const ListItem = ({ children, onClick, onAnimationEnd }) => {
  const onMouseEnter = (e) => {
    playCursorSound();
    if (e.target.className.includes('animated_menu_item')) {
      e.target.className += ' active';
    }
  };

  const onMouseLeave = (e) => {
    if (e.target.className.includes('animated_menu_item active')) {
      e.target.className = 'animated_menu_item';
    }
  };

  return (
    <div
      onAnimationEnd={() => onAnimationEnd()}
      className="animated_menu_item"
      onMouseEnter={(e) => onMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      onClick={() => onClick()}>
      {children}
    </div>
  );
};
