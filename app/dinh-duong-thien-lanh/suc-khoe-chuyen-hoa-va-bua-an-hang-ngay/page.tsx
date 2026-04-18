import { NutritionDetailPageClient } from "@/components/sections/NutritionDetailPageClient";
import { getNutritionDetailMetadata } from "@/lib/nutritionMetadata";

export const metadata = getNutritionDetailMetadata("suc-khoe-chuyen-hoa-va-bua-an-hang-ngay");

export default function NutritionMetabolicDetailPage() {
  return <NutritionDetailPageClient slug="suc-khoe-chuyen-hoa-va-bua-an-hang-ngay" />;
}