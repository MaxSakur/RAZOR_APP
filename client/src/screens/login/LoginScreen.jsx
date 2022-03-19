import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import ListItem from '../../components/ListItem';
// import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { merge, fadeInLeft, fadeOutLeft, fadeIn } from 'react-animations';
import { useTranslation } from 'react-i18next';
import { playCursorSound } from '../../utils/moveCursorSound';
import './styles.css';
import { textCapitalize } from '../../utils/textCapitalize';
import { loginMenuData } from './LoginMenuData';

const animationShow = keyframes`${merge(fadeInLeft, fadeIn)}`;
const animationHide = keyframes`${merge(fadeOutLeft, fadeIn)}`;

export const FadedContainer = styled.div`
  animation: 0.2s
    ${(props) => (props.type === 'in' ? animationShow : animationHide)};
`;

const LoginSelect = () => {
  const [currentActiveElement, setCurrentActiveElement] =
    React.useState('initial');
  const activeTab = loginMenuData(currentActiveElement);
  const [isFading, setFading] = React.useState(false);
  const { t } = useTranslation();

  const ListItemWithNavigation = ({ text, component, event, navToTab }) => {
    const onClick = () => {
      if (event) {
        event();
      } else {
        playCursorSound('click');
        setFading(true);
        setCurrentActiveElement(navToTab);
        // console.log(text, component, event, navToTab);
      }
    };

    return (
      <ListItem
        isFading={isFading}
        onAnimationEnd={() => setFading(false)}
        onClick={onClick}>
        {component ? component : <p>{textCapitalize(t(text))}</p>}
      </ListItem>
    );
  };

  return (
    <FadedContainer
      type={isFading ? 'out' : 'in'}
      onAnimationEnd={() => setFading(false)}
      className="slided_menu">
      <div className={'animated_menu start_options'}>
        {activeTab.content &&
          activeTab.content.map((item, index) => {
            return (
              <ListItemWithNavigation
                key={index}
                text={item.text}
                event={item.event}
                navToTab={item.navToTab}
                component={item.component}
              />
            );
          })}
      </div>
    </FadedContainer>
  );
};

export const LoginScreen = () => {
  return (
    <div className="loginContainer">
      <LoginSelect />
    </div>
  );
};
