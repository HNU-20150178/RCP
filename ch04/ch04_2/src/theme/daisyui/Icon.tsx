import type { FC } from "react";
import type { ButtonProps } from "./Button";
import type { IconProps as CIconProps } from "../../components";
import { Button } from "./Button";
import { Icon as CIcon } from "../../components";
export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string;
  };
export const Icon: FC<IconProps> = ({
  name,
  iconClassName,
  className,
  ...buttonProps
}) => {
  // btnClassName를 이용해 Botton tag의 크기를 Icon과 같게 조절함
  const btnClassName = ["btn-circle", className].join(" ");
  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  );
};
