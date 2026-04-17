import { imageManifest } from "@/data/imageManifest.generated";
import { imageSlots } from "@/data/imageSlots";

/** Path used when no image is found anywhere in the fallback chain. */
const GLOBAL_FALLBACK = "/images/hero-wellness.jpg";

/**
 * Resolves a public image path for a given slot ID.
 *
 * Resolution order:
 *   1. Direct manifest entry for the requested slot.
 *   2. The slot's declared fallbackSlotId (if set).
 *   3. The branch hero slot (`{branch}.hero`).
 *   4. Global fallback — /images/hero-wellness.jpg.
 *
 * Returns `null` only when the slot ID is completely unknown.
 * Safe to call during SSR, SSG, and client-side rendering.
 */
export function getImageForSlot(slotId: string): string | null {
  // 1. Direct hit in generated manifest
  const direct = imageManifest[slotId];
  if (direct) return direct;

  // 2. Look up slot definition for the fallback chain
  const slot = imageSlots.find((s) => s.id === slotId);
  if (!slot) return null;

  // 3. Explicit fallback slot declared in imageSlots
  if (slot.fallbackSlotId) {
    const explicit = imageManifest[slot.fallbackSlotId];
    if (explicit) return explicit;
  }

  // 4. Branch hero (for non-hero slots)
  if (slot.kind !== "hero") {
    const heroPath = imageManifest[`${slot.branch}.hero`];
    if (heroPath) return heroPath;
  }

  // 5. Global fallback
  return GLOBAL_FALLBACK;
}

/**
 * Same as `getImageForSlot` but returns `null` instead of the global fallback
 * when no real image is assigned. Useful when you want to conditionally render
 * an <img> only if an image actually exists for the slot.
 */
export function getImageForSlotStrict(slotId: string): string | null {
  const direct = imageManifest[slotId];
  if (direct) return direct;

  const slot = imageSlots.find((s) => s.id === slotId);
  if (!slot) return null;

  if (slot.fallbackSlotId) {
    const explicit = imageManifest[slot.fallbackSlotId];
    if (explicit) return explicit;
  }

  if (slot.kind !== "hero") {
    const heroPath = imageManifest[`${slot.branch}.hero`];
    if (heroPath) return heroPath;
  }

  return null;
}
