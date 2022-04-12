import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  Button,
  LogOutButton,
  Screen,
} from '../../components/common/styled_components';
import { logOutAC } from '../../reducers/userReducer';
import { questions } from './questions';
import BG from './../../assets/images/screens_bg/login_bg-min.jpeg';

export const RegisterCharacter = () => {
  const dispatch = useDispatch();
  // const [questionIndex, chooseQuestionIndex] = useState(0);
  const t = useTranslation();
  const onActionPress = () => {
    dispatch(logOutAC());
  };
  return (
    <Screen bg={BG}>
      <ul>
        {questions.map((item, i) => {
          return (
            <li>
              <label for={item.id}>{item.question}</label>
              <select
                name={item.id}
                key={item + i}
                id={item.id}
                onChange={(e) => console.log(e.target.value)}>
                {item.variants.map((item, i) => {
                  return (
                    <option key={item + i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </li>
          );
        })}
      </ul>

      <Button disabled={false} onClick={() => console.log()}>
        <p>{t('auth.login.loggedIn')}</p>
      </Button>

      <LogOutButton onClick={onActionPress}>OUT</LogOutButton>
    </Screen>
  );
};
