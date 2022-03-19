import React from 'react';
import { playCursorSound } from '../../utils/moveCursorSound';
import './styles.css';

export const ListItem = ({ children, onClick, onAnimationEnd }) => {
  const onMouseEnter = (e) => {
    playCursorSound();
    e.target.className = 'animated_menu_item active';
  };

  const onMouseLeave = (e) => {
    e.target.className = 'animated_menu_item';
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
