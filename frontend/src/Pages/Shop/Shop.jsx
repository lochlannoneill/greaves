import { useEffect } from "react";
import { Hero } from "../../Components/Hero/Hero";
import { DividerSale } from "../../Components/Dividers/DividerSale/DividerSale";
import { Popular } from "../../Components/Popular/Popular";
import { NewCollections } from "../../Components/NewCollections/NewCollections";

export const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <DividerSale />
      <NewCollections />
      <Popular />
    </div>
  );
};
