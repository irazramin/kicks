import { Hero } from "@/components/hero";
import { NewDropsSection } from "@/components/new-drops";
import { Categories } from "@/components/categories";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <NewDropsSection />
        <Categories />
        <Reviews />
      </div>
    </>
  );
}
