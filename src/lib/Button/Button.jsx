import React from 'react';
import './Button.scss';

export const Button = ({
  content,
  children,
}) => (
  <button className="shine-ui-button">
    { content || children }
  </button>
);

export default Button;
