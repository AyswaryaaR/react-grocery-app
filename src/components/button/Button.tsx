export interface IInputProps {
  className?: string;
  buttonText: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ className, buttonText, disabled, onClick }: IInputProps) => {
  return (
    <>
      <button className={className} disabled={disabled} onClick={onClick}>
        {buttonText}
      </button>
    </>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
