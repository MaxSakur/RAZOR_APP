import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '../../../components/listItem';
import { playCursorSound } from '../../../utils/moveCursorSound';
import { loginMenuData } from './LoginMenuData';
import { useTranslation } from 'react-i18next';
import { textCapitalize } from '../../../utils/textCapitalize';
import {
  FadedContainer,
  AnimatedDiv,
} from '../../../components/common/styled_components';

export const LoginMenu = () => {
  const [currentActiveElement, setCurrentActiveElement] =
    React.useState('initial');
  const activeTab = loginMenuData(currentActiveElement);
  const [isFading, setFading] = React.useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ListItemWithNavigation = React.memo(
    ({ text, component, event, navToTab, navToScreen }) => {
      const onClick = () => {
        if (event) {
          event();
        } else {
          playCursorSound('click');

          if (navToScreen) {
            navigate(`/${navToScreen}`);
          }
          if (navToTab) {
            setCurrentActiveElement(navToTab);
            setFading(true);
          }
        }
      };

      return (
        <div className="">
          <ListItem
            isFading={isFading}
            onAnimationEnd={() => setFading(false)}
            onClick={onClick}>
            {component ? component : <p>{textCapitalize(t(text))}</p>}
          </ListItem>
        </div>
      );
    },
  );

  return (
    <FadedContainer
      type={isFading ? 'out' : 'in'}
      onAnimationEnd={() => setFading(false)}>
      <AnimatedDiv>
        {activeTab.content.map((item, index) => {
          return (
            <ListItemWithNavigation
              key={index}
              text={item.text}
              event={item.event}
              navToTab={item?.navToTab}
              component={item.component}
            />
          );
        })}
      </AnimatedDiv>
    </FadedContainer>
  );
};
