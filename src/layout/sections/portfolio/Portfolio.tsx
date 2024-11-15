import React from "react";
import { Menu } from "../../../components/menu/Menu";

const PortfolioItems = [
  "All Categories",
  "UI Design",
  "Web Templates",
  "Logo",
  "Branding",
];

export const Portfolio = () => {
  return (
    <div>
      <Menu menuItems={PortfolioItems} />
    </div>
  );
};
