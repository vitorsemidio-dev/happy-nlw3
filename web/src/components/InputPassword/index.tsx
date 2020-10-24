import React, { InputHTMLAttributes, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Container } from "./style";

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
  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type={show ? "text" : "password"} id={name} {...rest} />
        {show ? (
          <FiEye onClick={() => setShow(!show)} color="#8FA7B2" size={24} />
        ) : (
          <FiEyeOff onClick={() => setShow(!show)} color="#15C3D6" size={24} />
        )}
      </Container>
    </>
  );
};

export default Input;
