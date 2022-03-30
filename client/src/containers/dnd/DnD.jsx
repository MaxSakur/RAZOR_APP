import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';

export const ItemTypes = {
  BOX: 'box',
};

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

export const Box = function Box({ name }) {
  const [{ isDragging, handlerId, isDraggedTo }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDraggedTo: monitor.getDropResult(),
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  console.log(isDragging, handlerId, isDraggedTo);
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="Box"
      style={{ ...style, opacity }}
      data-testid={`box-${name}`}>
      {name}
    </div>
  );
};

const styles = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};
export const Dustbin = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  console.log('is canDrop = ', canDrop, 'on hover', isOver);
  return (
    <div ref={drop} role={'Dustbin'} style={{ ...styles, backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};

export const DnD = () => {
  return (
    <div className="main">
      <Dustbin />
      <Box name={'WEAPON'} />
    </div>
  );
};
