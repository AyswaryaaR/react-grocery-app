import { ChangeEvent } from "react";
import "./input.css";

export interface IInputProps {
  className: string;
  placeholder: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  placeholder,
  type,
  value,
  onChange,
}: IInputProps) => {
  return (
    <>
      <input
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </>
  );
};

Input.defaultProps = {
  className: "input-field",
  placeholder: "Enter you text",
  value: "",
};

export default Input;
