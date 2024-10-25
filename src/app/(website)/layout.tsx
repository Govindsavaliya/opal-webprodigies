import React from "react";
import LandingPageNabBar from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="felx felx-col py-10 px-10 xl:px-0 container">
      <LandingPageNabBar />
      {children}
    </div>
  );
};

export default Layout;
