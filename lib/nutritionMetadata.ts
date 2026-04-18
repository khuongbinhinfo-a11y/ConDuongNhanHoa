import type { Metadata } from "next";
import { contentBranchesI18n } from "@/data/contentBranchesI18n";
import { nutritionDetailPagesI18n } from "@/data/nutritionDetailPagesI18n";

const BRAND = "Con Duong Nhan Hoa";
const NUTRITION_PATH = "/dinh-duong-thien-lanh";

const trimDescription = (text: string, maxLength = 165): string => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}...`;
};

export function getNutritionLandingMetadata(): Metadata {
  const landing = contentBranchesI18n["dinh-duong-thien-lanh"].nutritionLanding;
  const title = landing?.heroTitle.vi ?? "Dinh duong thien lanh";
  const description = trimDescription(
    landing?.heroDescription.vi ??
      "Noi dung dinh duong thien lanh giup doc lai thoi quen an uong mot cach binh tinh va can bang.",
  );

  return {
    title: `${title} | ${BRAND}`,
    description,
    alternates: {
      canonical: NUTRITION_PATH,
    },
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url: NUTRITION_PATH,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
    },
  };
}

export function getNutritionDetailMetadata(slug: string): Metadata {
  const detail = nutritionDetailPagesI18n[slug];

  if (!detail) {
    return {
      title: `Dinh duong thien lanh | ${BRAND}`,
      description:
        "Noi dung dinh duong thien lanh giup doc lai cac niem tin va lua chon an uong theo cach can bang hon.",
      alternates: {
        canonical: NUTRITION_PATH,
      },
    };
  }

  const title = detail.heroTitle.vi;
  const description = trimDescription(detail.heroDescription.vi);
  const path = `${NUTRITION_PATH}/${slug}`;

  return {
    title: `${title} | ${BRAND}`,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url: path,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND}`,
      description,
    },
  };
}
