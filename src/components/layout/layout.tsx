import React from "react";
import Header from "../header/header.client";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
