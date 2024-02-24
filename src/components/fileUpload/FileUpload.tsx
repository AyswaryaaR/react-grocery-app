import { ChangeEvent } from "react";
import "./fileUpload.css";
import Input from "../input/Input";

export interface IInputProps {
  className: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ className, value, onChange }: IInputProps) => {
  return (
    <>
      <Input
        className={className}
        onChange={onChange}
        type="file"
        value={value}
      />
    </>
  );
};

FileUpload.defaultProps = {
  className: "input-field",
  value: "",
};

export default FileUpload;
