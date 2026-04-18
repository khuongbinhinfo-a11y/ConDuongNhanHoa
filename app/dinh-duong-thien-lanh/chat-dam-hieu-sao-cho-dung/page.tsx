import { NutritionDetailPageClient } from "@/components/sections/NutritionDetailPageClient";
import { getNutritionDetailMetadata } from "@/lib/nutritionMetadata";

export const metadata = getNutritionDetailMetadata("chat-dam-hieu-sao-cho-dung");

export default function NutritionProteinDetailPage() {
  return <NutritionDetailPageClient slug="chat-dam-hieu-sao-cho-dung" />;
}