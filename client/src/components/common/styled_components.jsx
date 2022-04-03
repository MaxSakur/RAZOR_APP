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

export const Screen = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bg});
  padding: ${constants.paddings.lg}px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  text-transform: capitalize;
  text-align: end;
  color: ${(props) => (!props.disabled ? colors.white : 'grey')};
  padding: ${constants.paddings.sm}px 0;
  gap: ${constants.paddings.sm}px;
  align-items: center;
  text-shadow: 2px 2px 2px black;
  font-size: ${fonts.size.md}px;
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

export const LogOutButton = styled.button`
  width: 50px;
  height: 50px;
  color: ${colors.border_side_color};
  border-radius: 100%;
  position: fixed;
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
  flex: 1;
  justify-content: center;
`;

export const AnimatedDiv = styled.div`
  flex-direction: column;
  & .animated_menu_item {
    display: flex;
    flex: 0;
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
