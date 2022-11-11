import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export const BaseButton = (props) => {
  const {
    className,
    primary = false,
    ghost = false,
    text = false,
    size,
    to,
    variant,
    children,
    classes,
    onClick,
    disabled,
    ...others
  } = props;

  let Href = Fragment;
  if (to) Href = Link;
  if (disabled) Href = Fragment;

  const classesCustom = cx('', {
    [className]: className,
    primary,
    ghost,
    text,
  });

  return (
    <Href to={to} className={styles.Href}>
      <Button
        className={classesCustom}
        disabled={disabled}
        size={size}
        variant="contained"
        classes={{
          root: styles.BaseButton,
          sizeMedium: styles.SizeMedium,
          sizeSmall: styles.SizeSmall,
          sizeLarge: styles.SizeLarge,
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </Href>
  );
};

BaseButton.prototype = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  ghost: PropTypes.bool,
  size: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.bool,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
