import React, { InputHTMLAttributes } from 'react';

import { Container } from './style';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  extraInfo?: string;
}

const Textarea: React.FC<Props> = ({
  label,
  name,
  extraInfo,
  children: _children,
  ...rest
}) => {
  return (
    <Container className="input-block">
      <label htmlFor={name}>
        {label}
        { extraInfo && (
          <span>{extraInfo}</span>
        )}
      </label>
      <textarea id={name} {...rest} />
    </Container>
  )
}

export default Textarea;
