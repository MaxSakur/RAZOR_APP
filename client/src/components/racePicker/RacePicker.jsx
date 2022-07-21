import React from 'react';
import { useSelector } from 'react-redux';
import { RacePickerContainer, Image } from '../common/styled_components';
import { images } from './../../assets/images';

export const RacePicker = () => {
  const data = images.races;
  const characterGender = useSelector((store) => store.character.gender);
  const femaleImages = data.filter((el) => el.name.includes('Female'));
  const manImages = data.filter((el) => !el.name.includes('Female'));
  const checkGender = () =>
    characterGender === 'male' ? manImages : femaleImages;

  return (
    <RacePickerContainer>
      {checkGender().map((el) => {
        return (
          <Image
            key={el.name}
            imageCount={data.length + 1}
            src={el.image}
            alt={el.name}
          />
        );
      })}
    </RacePickerContainer>
  );
};
