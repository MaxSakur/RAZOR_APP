import React from 'react';
import './styles.css';

export const Input = (props) => {
  const [isPasswordShown, changeIsPasswordShown] = React.useState(false);
  return (
    <div className="inputContainer" variant="outlined">
      <label htmlFor="filled-adornment-password">{props.label}</label>
      {props.type === 'password' ? (
        <input
          style={props.icon && { marginLeft: '8px' }}
          className="input"
          variant="standard"
          autoComplete="autofill"
          value={props.value}
          type={isPasswordShown ? 'text' : 'password'}
          placeholder={props.placeholder}
          onChange={(event) => props.setValue(event.target.value)}

          // endAdornment={
          //   <InputAdornment position="end">
          //     <IconButton
          //       aria-label="toggle password visibility"
          //       onClick={() => changeIsPasswordShown(!isPasswordShown)}
          //       onMouseDown={handleMouseDownPassword}
          //       edge="end">
          //       {isPasswordShown ? (
          //         <VisibilityOff color="red" />
          //       ) : (
          //         <Visibility />
          //       )}
          //     </IconButton>
          //   </InputAdornment>
          // }
        />
      ) : (
        <input
          className="input"
          label={props.label}
          variant="standard"
          autoComplete="autofill"
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
          onChange={(event) => props.setValue(event.target.value)}
          endAdornment={props.end_icon}
        />
      )}
    </div>
  );
};
