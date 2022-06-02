import React from "react";
import { Banner } from "./HomePageComponents/Banner/Banner";
import { CategoryCard } from "./HomePageComponents/CategoryCard/CategoryCard";
import { Footer } from "./HomePageComponents/Footer/Footer";
import { NavBar } from "./HomePageComponents/NavBar/NavBar";
import { TrendingCard } from "./HomePageComponents/TrendingCard/TrendingCard";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <CategoryCard />
      <TrendingCard />
      <Footer />
    </div>
  );
}

export { HomePage };
