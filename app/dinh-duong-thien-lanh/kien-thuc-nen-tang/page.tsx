import { NutritionDetailPageClient } from "@/components/sections/NutritionDetailPageClient";
import { getNutritionDetailMetadata } from "@/lib/nutritionMetadata";

export const metadata = getNutritionDetailMetadata("kien-thuc-nen-tang");

export default function NutritionFoundationalKnowledgePage() {
  return <NutritionDetailPageClient slug="kien-thuc-nen-tang" />;
}
