import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../assets/images';
import ListImage from './../../components/listImage';
import { ListWithLabel } from '../../components/listWithLabel/ListWithLabel';
import {
  changeCharactersGenderAC,
  FEMALE,
  MALE,
} from '../../store/reducers/characterReduser';

export const CharacterInfoContainer = () => {
  const dispatch = useDispatch();
  const stateGender = useSelector((state) => state.character.gender);
  const [, setCharacter] = useState({
    name: '',
    gender: MALE,
  });
  const onValueChange = (val) => {
    setCharacter({ gender: val });
    dispatch(changeCharactersGenderAC(val));
  };
  const male = images.gender[0];
  const female = images.gender[1];

  return (
    <ListWithLabel label={'Gender:'}>
      <ListImage
        isActive={stateGender === male.name}
        onClick={() => onValueChange(MALE)}
        isIcon
        src={male.image}
        alt={male.name}
      />
      <ListImage
        isActive={stateGender === female.name}
        onClick={() => onValueChange(FEMALE)}
        isIcon
        src={female.image}
        alt={female.name}
      />
    </ListWithLabel>
  );
};
