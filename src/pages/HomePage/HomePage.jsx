import React from "react";
import {
  NavBar,
  Banner,
  CategoryCard,
  TrendingCard,
  Footer,
} from "./HomePageComponents";
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
