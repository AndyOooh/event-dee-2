import { PulseLoader } from "react-spinners";
import { colorMap } from "../utils/brandColors";

type Props = {
  text: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

type ButtonProps = {
  onClick?: () => void;
  type?: "submit" | "button";
};

export const ActionButton = ({ text, onClick, loading, disabled = false, className }: Props) => {
  const buttonProps: ButtonProps = onClick ? { onClick, type: "button" } : { type: "submit" };

  return (
    <button
      className={`btn btn-neutral w-full max-w-xs mx-auto flex-center ${className}`}
      {...buttonProps}
      disabled={disabled}>
      {loading ? <PulseLoader color={colorMap.white} size={8} speedMultiplier={0.5} /> : text}
    </button>
  );
};
