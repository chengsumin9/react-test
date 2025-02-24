import React from "react";

export interface RouteIProps {
  key: string;
  label?: string;
  redirect?: string;
  element?: React.ReactNode;
  children?: RouteIProps[];
}
