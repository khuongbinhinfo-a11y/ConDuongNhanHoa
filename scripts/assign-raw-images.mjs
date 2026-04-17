#!/usr/bin/env node
/**
 * assign-raw-images.mjs
 *
 * Reads image files from public/images/_raw/unassigned/,
 * assigns them to open slots in fixed priority order,
 * copies each file to its destination with the correct name,
 * and regenerates data/imageManifest.generated.ts.
 *
 * Usage:
 *   node scripts/assign-raw-images.mjs            — assign + write manifest
 *   node scripts/assign-raw-images.mjs --report   — show report only, no writes
 */

import {
  existsSync,
  readdirSync,
  mkdirSync,
  copyFileSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join, extname, basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");
const UNASSIGNED_DIR = join(ROOT, "public", "images", "_raw", "unassigned");
const PUBLIC_DIR = join(ROOT, "public");
const MANIFEST_PATH = join(ROOT, "data", "imageManifest.generated.ts");

const REPORT_ONLY = process.argv.includes("--report");
const ACCEPTED_EXT = new Set([".png", ".jpg", ".jpeg", ".webp"]);

// ─── Slot definitions (mirrors data/imageSlots.ts) ───────────────────────────
// Kept in sync manually — order determines assignment priority.
const IMAGE_SLOTS = [
  // Dinh dưỡng
  { id: "dinh-duong.hero",                                      targetDir: "images/dinh-duong",        targetBaseName: "hero-dinh-duong-thien-lanh" },
  { id: "dinh-duong.topic.kien-thuc-nen-tang",                  targetDir: "images/dinh-duong/topics", targetBaseName: "topic-kien-thuc-nen-tang" },
  { id: "dinh-duong.topic.sua-va-nhung-dieu-thuong-tin",        targetDir: "images/dinh-duong/topics", targetBaseName: "topic-sua-va-nhung-dieu-thuong-tin" },
  { id: "dinh-duong.topic.chat-dam-hang-ngay",                  targetDir: "images/dinh-duong/topics", targetBaseName: "topic-chat-dam-hang-ngay" },
  { id: "dinh-duong.topic.dai-thao-duong-beo-phi-chuyen-hoa",   targetDir: "images/dinh-duong/topics", targetBaseName: "topic-dai-thao-duong-beo-phi-chuyen-hoa" },
  { id: "dinh-duong.topic.ung-thu-va-goc-nhin-tu-bua-an",       targetDir: "images/dinh-duong/topics", targetBaseName: "topic-ung-thu-va-goc-nhin-tu-bua-an" },
  { id: "dinh-duong.post.01",                                   targetDir: "images/dinh-duong/posts",  targetBaseName: "post-dinh-duong-01" },
  { id: "dinh-duong.post.02",                                   targetDir: "images/dinh-duong/posts",  targetBaseName: "post-dinh-duong-02" },
  { id: "dinh-duong.post.03",                                   targetDir: "images/dinh-duong/posts",  targetBaseName: "post-dinh-duong-03" },
  // Ứng xử
  { id: "ung-xu.hero",                                          targetDir: "images/ung-xu",            targetBaseName: "hero-ung-xu-thien-lanh" },
  { id: "ung-xu.topic.hieu-minh-de-song-nhe-hon",              targetDir: "images/ung-xu/topics",     targetBaseName: "topic-hieu-minh-de-song-nhe-hon" },
  { id: "ung-xu.topic.ung-xu-trong-gia-dinh",                  targetDir: "images/ung-xu/topics",     targetBaseName: "topic-ung-xu-trong-gia-dinh" },
  { id: "ung-xu.topic.loi-noi-va-giao-tiep",                   targetDir: "images/ung-xu/topics",     targetBaseName: "topic-loi-noi-va-giao-tiep" },
  { id: "ung-xu.topic.ra-ngoai-xa-hoi-voi-su-tu-te",           targetDir: "images/ung-xu/topics",     targetBaseName: "topic-ra-ngoai-xa-hoi-voi-su-tu-te" },
  { id: "ung-xu.topic.nhung-tinh-huong-de-gap-trong-doi-song", targetDir: "images/ung-xu/topics",     targetBaseName: "topic-nhung-tinh-huong-de-gap-trong-doi-song" },
  { id: "ung-xu.post.01",                                       targetDir: "images/ung-xu/posts",      targetBaseName: "post-ung-xu-01" },
  { id: "ung-xu.post.02",                                       targetDir: "images/ung-xu/posts",      targetBaseName: "post-ung-xu-02" },
  { id: "ung-xu.post.03",                                       targetDir: "images/ung-xu/posts",      targetBaseName: "post-ung-xu-03" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Parse the existing manifest TS file into a plain object. */
function readExistingManifest() {
  if (!existsSync(MANIFEST_PATH)) return {};
  try {
    const content = readFileSync(MANIFEST_PATH, "utf8");
    const match = content.match(/export const imageManifest[^=]*=\s*\{([\s\S]*?)\};/);
    if (!match) return {};
    const entries = {};
    for (const [, key, value] of match[1].matchAll(/"([^"]+)":\s*"([^"]+)"/g)) {
      entries[key] = value;
    }
    return entries;
  } catch {
    return {};
  }
}

/** List image files in unassigned dir, sorted stably by filename. */
function listUnassignedImages() {
  if (!existsSync(UNASSIGNED_DIR)) {
    console.log(`⚠  Thư mục unassigned không tìm thấy: ${UNASSIGNED_DIR}`);
    return [];
  }
  return readdirSync(UNASSIGNED_DIR)
    .filter((f) => ACCEPTED_EXT.has(extname(f).toLowerCase()))
    .sort()
    .map((f) => join(UNASSIGNED_DIR, f));
}

/**
 * Check whether a slot's target file already exists on disk (e.g. from a
 * previous manual copy). Returns the public path if found, null otherwise.
 */
function findExistingFileOnDisk(slot) {
  const dir = join(PUBLIC_DIR, slot.targetDir);
  if (!existsSync(dir)) return null;
  for (const ext of [".webp", ".jpg", ".jpeg", ".png"]) {
    const candidate = join(dir, slot.targetBaseName + ext);
    if (existsSync(candidate)) {
      return `/${slot.targetDir}/${slot.targetBaseName}${ext}`;
    }
  }
  return null;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  console.log("\n════════════════════════════════════════════");
  console.log("  🌿 assign-raw-images" + (REPORT_ONLY ? " [--report]" : ""));
  console.log("════════════════════════════════════════════\n");

  const existingManifest = readExistingManifest();
  const rawImages = listUnassignedImages();

  console.log(`📁 Ảnh thô trong unassigned: ${rawImages.length} file(s)`);
  for (const f of rawImages) console.log(`   • ${basename(f)}`);
  if (rawImages.length > 0) console.log("");

  const updatedManifest = { ...existingManifest };
  const rawQueue = [...rawImages];

  const report = {
    alreadyInManifest: [],  // slot already in manifest → skip
    foundOnDisk: [],        // slot not in manifest but file exists on disk
    newlyAssigned: [],      // slot filled from rawQueue
    missing: [],            // slot still empty (no image available)
    skipped: [],            // raw images left over after all slots filled
  };

  for (const slot of IMAGE_SLOTS) {
    // 1. Slot already recorded in manifest
    if (updatedManifest[slot.id]) {
      report.alreadyInManifest.push({ id: slot.id, path: updatedManifest[slot.id] });
      continue;
    }

    // 2. File already on disk (manual placement not yet in manifest)
    const onDisk = findExistingFileOnDisk(slot);
    if (onDisk) {
      updatedManifest[slot.id] = onDisk;
      report.foundOnDisk.push({ id: slot.id, path: onDisk });
      continue;
    }

    // 3. Take next raw image from queue
    if (rawQueue.length === 0) {
      report.missing.push(slot.id);
      continue;
    }

    const src = rawQueue.shift();
    const ext = extname(src).toLowerCase();
    const destDir = join(PUBLIC_DIR, slot.targetDir);
    const destFile = join(destDir, slot.targetBaseName + ext);
    const publicPath = `/${slot.targetDir}/${slot.targetBaseName}${ext}`;

    if (!REPORT_ONLY) {
      mkdirSync(destDir, { recursive: true });
      copyFileSync(src, destFile);
    }

    updatedManifest[slot.id] = publicPath;
    report.newlyAssigned.push({ id: slot.id, path: publicPath, source: basename(src) });
  }

  // Raw images that found no open slot
  for (const f of rawQueue) {
    report.skipped.push(basename(f));
  }

  // ─── Print report ──────────────────────────────────────────────────────────

  if (report.alreadyInManifest.length > 0) {
    console.log(`✅ Slot đã có ảnh trong manifest (${report.alreadyInManifest.length}):`);
    for (const { id, path } of report.alreadyInManifest) {
      console.log(`   [${id}]`);
      console.log(`       → ${path}`);
    }
    console.log("");
  }

  if (report.foundOnDisk.length > 0) {
    console.log(`💾 Tìm thấy ảnh trên disk, thêm vào manifest (${report.foundOnDisk.length}):`);
    for (const { id, path } of report.foundOnDisk) {
      console.log(`   [${id}]`);
      console.log(`       → ${path}`);
    }
    console.log("");
  }

  if (report.newlyAssigned.length > 0) {
    const verb = REPORT_ONLY ? "SẼ gán" : "Đã gán";
    console.log(`🎯 ${verb} từ unassigned (${report.newlyAssigned.length}):`);
    for (const { id, path, source } of report.newlyAssigned) {
      console.log(`   [${id}]`);
      console.log(`       ← ${source}`);
      console.log(`       → ${path}`);
    }
    console.log("");
  }

  if (report.missing.length > 0) {
    console.log(`⚠  Slot còn thiếu ảnh — cần thêm ảnh vào unassigned (${report.missing.length}):`);
    for (const id of report.missing) console.log(`   • ${id}`);
    console.log("");
  }

  if (report.skipped.length > 0) {
    console.log(`🔁 Ảnh dư (không còn slot trống nào) (${report.skipped.length}):`);
    for (const f of report.skipped) console.log(`   • ${f}`);
    console.log("");
  }

  // ─── Write manifest ────────────────────────────────────────────────────────

  if (REPORT_ONLY) {
    console.log("ℹ  Chế độ --report: không ghi file.\n");
    return;
  }

  const now = new Date().toISOString().slice(0, 10);
  const entries = Object.entries(updatedManifest)
    .map(([k, v]) => `  "${k}": "${v}",`)
    .join("\n");

  const output = [
    `// AUTO-GENERATED by scripts/assign-raw-images.mjs — do not edit manually.`,
    `// Run: npm run image:assign`,
    `// Last updated: ${now}`,
    ``,
    `export const imageManifest: Record<string, string> = {`,
    entries,
    `};`,
    ``,
  ].join("\n");

  writeFileSync(MANIFEST_PATH, output, "utf8");
  console.log(`📄 Manifest đã ghi → data/imageManifest.generated.ts`);

  const total = Object.keys(updatedManifest).length;
  const totalSlots = IMAGE_SLOTS.length;
  console.log(`\n📊 Tổng kết: ${total}/${totalSlots} slot đã có ảnh.\n`);
}

main();
