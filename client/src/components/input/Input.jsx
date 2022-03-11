import React from 'react';
import {
  FormControl,
  InputLabel,
  Input as MuiInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material/';
import './styles.css';

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

export const Input = (props) => {
  const [isPasswordShown, changeIsPasswordShown] = React.useState(false);
  return (
    <FormControl className="inputContainer" variant="outlined">
      <InputLabel htmlFor="filled-adornment-password">{props.label}</InputLabel>
      {props.type === 'password' ? (
        <MuiInput
          style={props.icon && { marginLeft: '8px' }}
          className="input"
          variant="standard"
          autoComplete="autofill"
          value={props.value}
          type={isPasswordShown ? 'text' : 'password'}
          placeholder={props.placeholder}
          onChange={(event) => props.setValue(event.target.value)}
          startAdornment={
            <InputAdornment position="start">{props.icon}</InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => changeIsPasswordShown(!isPasswordShown)}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {isPasswordShown ? (
                  <VisibilityOff color="red" />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      ) : (
        <MuiInput
          className="input"
          label={props.label}
          variant="standard"
          autoComplete="autofill"
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
          startAdornment={
            props.icon ? (
              <InputAdornment position="start">{props.icon}</InputAdornment>
            ) : null
          }
          onChange={(event) => props.setValue(event.target.value)}
          endAdornment={props.end_icon}
        />
      )}
    </FormControl>
  );
};
