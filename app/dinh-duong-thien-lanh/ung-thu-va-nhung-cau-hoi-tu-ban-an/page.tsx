import { NutritionDetailPageClient } from "@/components/sections/NutritionDetailPageClient";
import { getNutritionDetailMetadata } from "@/lib/nutritionMetadata";

export const metadata = getNutritionDetailMetadata("ung-thu-va-nhung-cau-hoi-tu-ban-an");

export default function CancerQuestionPage() {
  return <NutritionDetailPageClient slug="ung-thu-va-nhung-cau-hoi-tu-ban-an" />;
}
