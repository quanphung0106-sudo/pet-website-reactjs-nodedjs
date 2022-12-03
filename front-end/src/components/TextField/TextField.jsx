import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import clsx from 'clsx';

import styles from './TextField.module.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';

//input
const InputBaseClasses = {
  root: styles.InputBaseRoot,
  focused: styles.InputBaseFocused,
  disabled: styles.InputBaseDisabled,
  error: styles.InputBaseError,
};

//label
const InputLabelClasses = {
  root: styles.LabelRoot,
  focused: styles.LabelFocused,
  disabled: styles.LabelDisabled,
  error: styles.LabelError,
  required: styles.LabelRequired,
};

//error
const FormHelperTextClasses = {
  root: styles.HelperTextRoot,
  error: styles.HelperTextError,
};

const BaseInputField = React.forwardRef((props, ref) => {
  const { variant, iconStart, iconEnd, InputPropClasses, type, ...others } = props;
  const [show, setShow] = useState(false);

  return (
    <TextField
      {...others}
      type={show ? 'text' : type}
      ref={ref}
      variant={variant}
      InputLabelProps={{ shrink: true, classes: InputLabelClasses }}
      FormHelperTextProps={{ classes: FormHelperTextClasses }}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <>
           {type === 'password' && <IconButton position="end" onClick={() => setShow(!show)}>
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>}
          </>
        ),
      }}
    />
  );
});

export const LineTextField = React.forwardRef((props, ref) => {
  const { error, InputProps, helperText, className, ...others } = props;

  return (
    <BaseInputField
      {...others}
      ref={ref}
      variant="standard"
      className={clsx(styles.InputField, styles.LineTextField, className)}
      InputProps={{
        classes: {
          ...InputBaseClasses,
        },

        //ben ngoai truyen them "InputProps" => phai rai ...InputProps
        ...InputProps,
      }}
      error={error}
      helperText={error ? helperText : ''}
    />
  );
});
export const ContainedTextField = React.forwardRef((props, ref) => {
  const { error, InputProps, helperText, className, ...others } = props;

  return (
    <BaseInputField
      {...others}
      ref={ref}
      variant="outlined"
      className={clsx(styles.InputField, styles.ContainedTextField, className)}
      InputProps={{
        classes: {
          ...InputBaseClasses,
          notchedOutline: styles.NoutchedOutline,
        },
        ...InputProps,
      }}
      error={error}
      helperText={error ? helperText : ''}
    />
  );
});
