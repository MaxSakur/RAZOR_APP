import styled, { keyframes } from 'styled-components';
import { merge, fadeInLeft, fadeOutLeft, fadeIn } from 'react-animations';
import { colors, constants, fonts } from './styled_theme';
import cursor_image from './../../assets/images/cursor/FF7Cursor.png';

const animationShow = keyframes`${merge(fadeInLeft, fadeIn)}`;
const animationHide = keyframes`${merge(fadeOutLeft, fadeIn)}`;

const bouncing = keyframes`
0% {
  background-size: ${constants.cursor_height * 0.7}px
}
50% {
  background-size: ${constants.cursor_height * 0.8}px
}
100% {
  background-size: ${constants.cursor_height * 0.7}px
}
`;

export const Video = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const Container = styled.div`
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  border-left: 2px solid #fff;
  margin-bottom: ${constants.paddings.lg}px;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 2px;
    margin-left: 0;
    margin-bottom: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8) 0%,
      transparent
    );
    display: block;
    position: absolute;
    bottom: 0;
  }
`;

export const ContainerHeader = styled.p`
  background: linear-gradient(
    to right,
    ${colors.border_accent_color} 0%,
    transparent
  );

  font-size: 32px;
  text-transform: uppercase;
  position: relative;
  padding: ${constants.paddings.md}px ${constants.paddings.md}px;

  &:before {
    content: '';
    width: 100%;
    height: 2px;
    margin-left: -${constants.paddings.md}px;
    margin-top: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8) 0%,
      transparent
    );
    display: block;
    position: absolute;
    top: 0;
  }
`;
export const ContainerBody = styled.div`
  overflow: hidden;
  background: transparent;
  position: relative;
  color: #fff;
  font-size: ${fonts.size.lg}px;
  &:before {
    content: '';
    width: 100%;
    height: 2px;
    margin-left: -${constants.paddings.md}px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8) 0%,
      transparent
    );
    display: block;
    position: absolute;
    top: 0;
  }
`;

export const ScreenWithVideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Screen = styled.div`
  display: flex;
  position: ${(props) => props.video && 'absolute'};
  left: 0;
  top: 0;
  flex: 1;
  box-sizing: border-box;
  height: 100vh;
  justify-content: ${(props) => (props.spaceBetween ? 'space-between' : '')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bg});
  padding: ${constants.paddings.lg}px;
`;

export const ScreenName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100px;
  position: relative;
  background: linear-gradient(
    to top,
    ${colors.border_accent_color} 0%,
    transparent
  );
  & p {
    font-size: ${fonts.size.lg * 3}px;
    color: #fff;
    transform: rotate(-90deg);
    text-transform: uppercase;
  }
`;

export const ScreenContent = styled.div`
  flex: 1;
  overflow-x: scroll;
  padding-left: ${(props) => (props.screenName ? constants.paddings.lg : 0)}px;
`;
export const LoginMonitor = styled.div`
  flex: 3;
`;
export const Text = styled.p`
  padding: ${constants.paddings.md}px;
`;
export const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  background-color: ${colors.border_secondary_color};
  text-transform: uppercase;
  text-align: end;
  margin: ${constants.paddings.md}px;
  padding: ${constants.paddings.md}px;
  align-items: center;
  text-shadow: 2px 2px 2px black;
  color: ${colors.white};
  &[disabled] {
    color: ${colors.disabled};
  }
  & p {
    padding: ${constants.paddings.sm}px ${constants.paddings.md}px;
    color: ${(props) => (!props.disabled ? colors.white : colors.disabled)};
    font-size: ${fonts.size.md}px;
    background-color: ${(props) =>
      !props.disabled ? colors.border_secondary_color : `transparent`};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  & div.items {
    display: flex;
    gap: ${constants.paddings.sm - 4}px;
    padding-top: ${constants.paddings.sm - 6}px;
  }
`;

export const FadedContainer = styled.div`
  padding-left: ${constants.cursor_height}px;
  min-width: 280px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  animation: 0.2s
    ${(props) => (props.type === 'in' ? animationShow : animationHide)};
`;

export const CardCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CardRoleImage = styled.img`
  object-fit: cover;
  height: ${(props) => (props.icon ? '50px' : '100%')};
  position: ${(props) => (props.icon ? 'absolute' : 'relative')};
  top: ${(props) => (props.icon ? '12px' : '')};
  left: ${(props) => (props.icon ? '12px' : '')};
`;
export const CardLabel = styled.p`
  color: ${colors.white};
  text-transform: capitalize;
  border-bottom: 1px solid ${colors.white};
  line-height: 3;
  transform: rotate(35deg);
  font-size: ${fonts.size.md}px;
`;

export const CardLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -40px;
  right: -90px;
  width: 240px;
  height: 93px;
  width: ${(props) =>
    props.isIcon ? constants.icon_height : constants.card_height}px;
  transform: rotate(-35deg);
  background-color: ${colors.rebeka};
  z-index: 10;
`;

export const CardImageContainer = styled.div`
  background-color: ${colors.border_accent_color};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  width: ${constants.icon_width}px;
  height: ${(props) =>
    props.isIcon ? constants.icon_height : constants.card_height}px;
  box-shadow: 1px 1px 5px 5px rgba(222, 84, 213, 0.25);
  filter: grayscale(${(props) => (props.isActive ? 0 : 1)});
  transition: all 0.5s ease-in-out;
`;

export const LogOutButton = styled.button`
  width: 50px;
  height: 50px;
  color: ${colors.border_side_color};
  border-radius: 100%;
  position: fixed;
  z-index: 99;
  background: linear-gradient(
    to right,
    ${colors.border_accent_color} 60%,
    transparent
  );
  right: 20px;
  bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${constants.paddings.md}px;
  flex: 1;
  transition: all 1s ease;
`;

export const CommonForm = ({ children }) => {
  return <Form autoComplete="on">{children}</Form>;
};

export const BottomSection = styled.div`
  display: flex;
  flex: 1;
`;

export const TopSection = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
`;

export const AnimatedDiv = styled.div`
  flex-direction: column;
  padding: 0 20px;
  display: inline-flex;
  width: min-content;
  & .animated_menu_item {
    display: flex;
    flex: 0;
    color: ${colors.white};
    border-left: 2px solid ${colors.border_side_color};
    min-width: 150px;
    background: linear-gradient(
      to right,
      ${colors.border_accent_color} 60%,
      transparent
    );
    min-height: ${constants.cursor_height}px;
    padding-left: ${constants.cursor_height / 2}px;
    margin: 2px 0;
    align-items: center;
    position: relative;

    & p {
      color: rgb(199, 194, 194);
      font-size: ${fonts.size.md};
    }

    &.active {
      cursor: pointer;
      border-left: 2px solid ${colors.white};
      background: linear-gradient(
        to right,
        ${colors.border_secondary_color} 10%,
        transparent
      );

      &:before {
        content: '';
        background-image: url(${cursor_image});
        background-size: ${constants.cursor_height}px;
        background-repeat: no-repeat;
        position: absolute;
        left: -${constants.cursor_height}px;
        top: ${constants.cursor_height * 0.4}px;
        height: 100%;
        width: 200px;
        animation: ${bouncing} 1s ease infinite;
      }

      & p {
        text-shadow: 2px 2px 2px black;
        color: #fff;
      }
    }
  }
`;

export const InputContainer = styled.div`
  border-bottom: 1px solid ${colors.border_side_color};
  padding-bottom: ${constants.paddings.xs}px;
  & label {
    color: ${colors.border_side_color};
  }
  & .input_value {
    width: calc(100% - 40px);
    border: none;
    background-color: transparent;
    padding: ${constants.paddings.xs}px 0;
    color: #fff;
    &:focus {
      outline: transparent solid;
    }
  }
  & .input_icon_container {
    background-color: transparent;
    position: relative;
  }
`;

export const Input = (props) => {
  return (
    <InputContainer>
      <label htmlFor="filled-adornment-password">{props.label}</label>
      <div className="input_icon_container">
        <input
          style={props.icon && { marginLeft: '8px' }}
          className="input_value"
          variant="standard"
          autoComplete="autofill"
          value={props.value}
          placeholder={props.placeholder}
          onChange={(event) => props.setValue(event.target.value)}
        />
      </div>
    </InputContainer>
  );
};

export const DraggableItem = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  & img {
  }
`;
