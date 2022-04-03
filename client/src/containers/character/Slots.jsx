import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import './styles.css';

export const CharacterSlot = {
  NECKLACE: 'necklace',
  BREASTPLATE: 'breastplate',
  PANTS: 'pants',
  WEAPON: 'weapon',
  HEAD: 'head',
  BELT: 'belt',
  RINGS: 'rings',
  GAUNTLET: 'gauntlet',
  BOOTS: 'boots',
  SHIELD: 'shield',
};

export const DragItem = function Box({ name, type }) {
  const [{ isDragging, isDraggedTo }, drag] = useDrag(() => ({
    type,
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.type} into ${dropResult.name}!`);
        // Send request for updating character equipment
      }
    },
    collect: (monitor) => ({
      isDraggedTo: monitor.getDropResult(),
      isDragging: monitor.isDragging(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <li ref={drag} role="Item" style={{ opacity }}>
      {name}
    </li>
  );
};

export const DragSlot = ({ type }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: type,
    drop: () => ({ name: type }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = '#fff';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <li
      className={`hero_model_element ${type}`}
      ref={drop}
      role={'Slot'}
      style={{ backgroundColor }}
    />
  );
};
