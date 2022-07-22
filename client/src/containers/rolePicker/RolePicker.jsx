import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCharactersRoleAC } from '../../store/reducers/characterReduser';
import ListImage from '../../components/listImage';
import { ListWithLabel } from '../../components/listWithLabel/ListWithLabel';
import { images } from '../../assets/images';

export const RolePicker = () => {
  const data = images.roles;
  const stateRole = useSelector((store) => store.character.role);
  const dispatch = useDispatch();
  const onValueChange = (val) => {
    dispatch(changeCharactersRoleAC(val));
  };
  return (
    <ListWithLabel label={'Role:'}>
      {data.map((el) => {
        return (
          <ListImage
            key={el.name}
            src={el.image}
            alt={el.name}
            type="role"
            isActive={stateRole === el.name}
            onClick={() => onValueChange(el.name)}
          />
        );
      })}
    </ListWithLabel>
  );
};
