import { cn } from "@/lib/utils";
import React from "react";

const IconButton = ({ onClick, className, icon, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        `${disabled ? "cursor-not-allowed" : ""} rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`,
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
