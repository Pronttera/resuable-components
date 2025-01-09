//@ts-nocheck
import { Button, Input } from "@material-tailwind/react";
import React from "react";

const MTInput = (props: any) => {
  return (
    <div className="relative flex w-full">
      <Input
        label={props?.label}
        value={props?.value}
        placeholder={props?.placeholder}
        onChange={props?.handleChange}
        variant={props?.variant || "outlined"}
        size={props?.size || "md"}
        disabled={props?.disabled}
        color={props?.color}
        error={props?.error || false}
        type={props?.type}
        className={`${props?.className}`}
      />
      {props?.btnIcon && props?.btnName && (
        <Button
          size="sm"
          color={props?.value ? "gray" : "blue-gray"}
          disabled={!props?.value}
          onClick={props?.handleButtonClick}
          className="!absolute right-1 top-1 rounded"
        >
          {props?.btnName}
        </Button>
      )}
    </div>
  );
};

export default MTInput;
