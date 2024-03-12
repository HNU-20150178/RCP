import { render } from "@testing-library/react";
import { CSSProperties, Component, FC, type FunctionComponent } from "react";

export type IconProps = {
  name: string;
  style?: CSSProperties;
};

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  return (
    <span {...props} className="material-icons">
      {name}
    </span>
  );
};
