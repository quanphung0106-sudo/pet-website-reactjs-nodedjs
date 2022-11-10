import { InputAdornment, TextField } from '@mui/material';
import clsx from 'clsx';

import styles from './TextField.module.scss';

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
let _props;
const { label, placeholder, type, id, name, error, required, InputProps, helperText, onChange, className } = _props;

const BaseInputField = (props) => {
  const { variant, iconStart, iconEnd, InputPropClasses, ...others } = props;
  return (
    <TextField
      {...others}
      variant={variant}
      InputLabelProps={{ shrink: true, classes: InputLabelClasses }}
      FormHelperTextProps={{ classes: FormHelperTextClasses }}
    />
  );
};

export const LineTextField = (..._props) => {
  return (
    <BaseInputField
      variant="standard"
      className={clsx(styles.InputField, styles.LineTextField, className)}
      InputProps={{
        classes: {
          ...InputBaseClasses,
        },

        //ben ngoai truyen them "InputProps" => phai rai ...InputProps
        ...InputProps,
      }}
      placeholder={placeholder}
      label={label}
      error={error}
      helperText={error ? helperText : ''}
      onChange={onChange}
      required={required}
      type={type}
      id={id}
      name={name}
    />
  );
};
export const ContainedTextField = (..._props) => {
  // const { label, placeholder, id, name, required, type, error, InputProps, helperText, onChange, className } = props;
  return (
    <BaseInputField
      variant="outlined"
      className={clsx(styles.InputField, styles.ContainedTextField, className)}
      InputProps={{
        classes: {
          ...InputBaseClasses,
          notchedOutline: styles.NoutchedOutline,
        },
        ...InputProps,
      }}
      helperText={error ? helperText : ''}
      placeholder={placeholder}
      label={label}
      error={error}
      onChange={onChange}
      required={required}
      type={type}
      id={id}
      name={name}
    />
  );
};
