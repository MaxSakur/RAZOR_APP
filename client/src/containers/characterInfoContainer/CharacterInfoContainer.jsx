import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Flex, FlexLabel } from '../../components/common/styled_components';
import {
  changeCharactersGenderAC,
  FEMALE,
  MALE,
} from '../../store/reducers/characterReduser';

export const CharacterInfoContainer = () => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState({
    name: '',
    gender: MALE,
  });
  const onValueChange = (val) => {
    setCharacter({ gender: val.currentTarget.value });
    dispatch(changeCharactersGenderAC(val.currentTarget.value));
  };

  return (
    <Flex>
      Choose characters gender:
      <FlexLabel>
        <p>{MALE}</p>
        <input
          type="radio"
          value={MALE}
          checked={character.gender === MALE}
          onChange={onValueChange}
        />
      </FlexLabel>
      <FlexLabel>
        <p>{FEMALE}</p>
        <input
          type="radio"
          value={FEMALE}
          checked={character.gender === FEMALE}
          onChange={onValueChange}
        />
      </FlexLabel>
    </Flex>
  );
};
