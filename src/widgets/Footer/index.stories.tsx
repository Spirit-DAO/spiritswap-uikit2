import React from "react";
import Footer from "./footer";

export default {
  title: "Widgets/Footer",
  component: Footer,
  argTypes: {},
};

const FooterComponent: React.FC = () => <Footer />;

export const Default: React.FC = () => {
  return <FooterComponent />;
};
