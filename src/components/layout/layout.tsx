import React from "react";
import Header from "../header/header.client";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="mx-auto flex-col max-w-7xl items-center justify-between p-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
