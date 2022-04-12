import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { DraggableItem } from './../../components/common/styled_components';
import './styles.css';

export const CharacterSlot = {
  NECKLACE: 'necklace',
  BREASTPLATE: 'breastplate',
  PANTS: 'pants',
  WEAPON: 'weapon',
  HEAD: 'head',
  BELT: 'belt',
  RINGS: 'rings',
  GAUNTLET: 'gauntlets',
  BOOTS: 'boots',
  SHIELD: 'shield',
};

export const DragItem = function Box({ name, type, image }) {
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
    <DraggableItem ref={drag} role="Item" style={{ opacity }}>
      <img src={image} alt="item image" />
      <div>
        <p>{name}</p>
      </div>
    </DraggableItem>
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
