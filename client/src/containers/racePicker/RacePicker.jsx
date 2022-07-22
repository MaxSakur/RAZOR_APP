import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCharactersRaceAC,
  FEMALE,
} from '../../store/reducers/characterReduser';
import ListImage from '../../components/listImage';
import { ListWithLabel } from '../../components/listWithLabel/ListWithLabel';
import { images } from '../../assets/images';

export const RacePicker = () => {
  const data = images.races;
  const dispatch = useDispatch();
  const characterGender = useSelector((store) => store.character.gender);
  const stateRace = useSelector((store) => store.character.race);
  const femaleImages = data.filter((el) => el.name.includes('Female'));
  const manImages = data.filter((el) => !el.name.includes('Female'));
  const checkGender = () =>
    characterGender === FEMALE ? femaleImages : manImages;
  const onValueChange = (val) => {
    dispatch(changeCharactersRaceAC(val));
  };
  return (
    <ListWithLabel label={'Race:'}>
      {checkGender().map((el) => {
        return (
          <ListImage
            key={el.name}
            src={el.image}
            alt={el.name}
            isActive={stateRace === el.name}
            onClick={() => onValueChange(el.name)}
          />
        );
      })}
    </ListWithLabel>
  );
};
