import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children, type, className, disabled, active, onClick, icon = {}, ...args
}) => (
  <button type={type} className={className} onClick={onClick} disabled={disabled} {...args}>
    {children}
    {icon}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.any
};
Button.defaultProps = {
  children: 'primary',
  type: 'button',
  className: 'btn',
  disabled: false,
  active: false,
  onClick: () => { },
  icon: '',
};
export default Button;
