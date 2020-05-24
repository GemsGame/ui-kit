import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children, type, className, disabled, onClick, icon, ...args
}) => {
  const Tag = args.href ? 'a' : 'button';
  const active = args.active ? 'active' : null;

  const onClickAction = (e) => {
    if (disabled) {
      return e.preventDefault();
    }
    return onClick(e);
  };
  return (
    <Tag type={type} className={`${className} ${active}`} onClick={onClickAction} disabled={disabled} {...args}>
      {children}
      {icon}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.any,
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
