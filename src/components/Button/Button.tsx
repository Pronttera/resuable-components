import { Button } from "@material-tailwind/react";

const ButtonTW = (props: any) => {
  return (
    <Button
      size={props?.size || "md"}
      variant={props?.variant || "filled"}
      color={props?.color}
      loading={props?.loading || false}
      className={`${props?.className}`}
      ripple={props?.ripple}
      disabled={props?.disabled || false}
      onClick={props?.handleClick}
    >
      {props?.label || "Button"}
    </Button>
  );
};

export default ButtonTW;
