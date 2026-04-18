import { NutritionLandingPageClient } from "@/components/sections/NutritionLandingPageClient";
import { getNutritionLandingMetadata } from "@/lib/nutritionMetadata";

export const metadata = getNutritionLandingMetadata();

export default function DinhDuongThienLanhPage() {
  return <NutritionLandingPageClient />;
}
