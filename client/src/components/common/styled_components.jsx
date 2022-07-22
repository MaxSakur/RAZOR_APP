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
  justify-content: ${(props) => (props.spaceBetween ? 'space-between' : '')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bg});
  padding: ${constants.paddings.lg}px;
`;

export const LoginMonitor = styled.div`
  flex: 3;
`;
export const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: transparent;
  text-transform: capitalize;
  text-align: end;
  gap: ${constants.paddings.sm}px;
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
  padding: ${constants.paddings.md}px;
  gap: 8px;
  & p.label {
    color: red;
    font-size: ${fonts.size.xl}px;
    text-decoration: underline;
    text-decoration-color: ${colors.border_accent_color};
  }
  & div.items {
    display: flex;
    gap: 8px;
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
  flex: ${(props) => (props.isIcon ? '1' : '15')};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const CardImage = styled.img`
  width: ${(props) => (props.icon ? '30px' : '100%')};
  height: ${(props) => (props.icon ? 'auto' : '100%')};
  object-fit: cover;
`;
export const CardRoleImage = styled.img`
  height: 100px;
  border-radius: 100%;
`;
export const CardLabel = styled.p`
  color: ${colors.white};
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  border-bottom: 1px solid ${colors.white};
  line-height: 2;
`;
export const CardImageContainer = styled.div`
  background-color: ${colors.border_side_color};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 8px;
  width: 120px;
  height: ${(props) => (props.isIcon ? '120px' : '240px')};
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border: 4px solid ${(props) => (props.isActive ? colors.accepted : 'white')};
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
