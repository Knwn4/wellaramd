import { getCatalog } from "@/lib/catalog";
import CategoryRow from "./CategoryRow";

const GROUPS = [
  {
    index: "01",
    slug: "weight-loss",
    bgImage: "/lifestyle/cat-weight.jpg",
    title: "Weight & Metabolic",
    blurb:
      "GLP-1 and metabolic therapies, prescribed and monitored by a physician who follows your progress.",
    ctaLabel: "Explore weight care",
  },
  {
    index: "02",
    slug: "longevity",
    bgImage: "/lifestyle/cat-longevity.jpg",
    title: "Longevity",
    blurb:
      "Cellular energy, recovery, and healthy-aging protocols built to keep you feeling like yourself.",
    ctaLabel: "Explore longevity",
  },
];

export default async function CategorySections() {
  const { treatments } = await getCatalog();

  return (
    <>
      {GROUPS.map((g) => (
        <CategoryRow
          key={g.slug}
          index={g.index}
          title={g.title}
          blurb={g.blurb}
          ctaLabel={g.ctaLabel}
          bgImage={g.bgImage}
          treatments={treatments.filter((t) => t.categories.includes(g.slug)).slice(0, 10)}
        />
      ))}
    </>
  );
}
