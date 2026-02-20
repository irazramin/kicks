import { Hero } from "@/components/hero";
import { NewDropsSection } from "@/components/new-drops";
import { Categories } from "@/components/categories";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <NewDropsSection />
        <Categories />
      </div>
    </>
  );
}
