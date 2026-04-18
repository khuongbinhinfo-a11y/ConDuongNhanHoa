import { NutritionDetailPageClient } from "@/components/sections/NutritionDetailPageClient";
import { getNutritionDetailMetadata } from "@/lib/nutritionMetadata";

export const metadata = getNutritionDetailMetadata("sua-va-nhung-dieu-thuong-duoc-tin");

export default function NutritionMilkDetailPage() {
  return <NutritionDetailPageClient slug="sua-va-nhung-dieu-thuong-duoc-tin" />;
}