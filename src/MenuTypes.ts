import React from "react";

export interface MenuProps extends React.HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}
