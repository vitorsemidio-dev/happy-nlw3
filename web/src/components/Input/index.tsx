import React, { InputHTMLAttributes } from 'react';

import { Container } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<Props> = ({
  label,
  name,
  children: _children,
  ...rest
}) => {
  return (
    <Container className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </Container>
  )
}

export default Input;
