import { readFileSync, writeFileSync } from 'fs';

const filePath = 'data/imageSlots.ts';
const t = readFileSync(filePath, 'utf8');
const hPos = t.indexOf('hero-hanh-dong-thien-lanh');
const closePattern = '  },';
const insertPos = t.indexOf(closePattern, hPos) + closePattern.length;

const newSlots = [
  ['hanh-dong.topic.ung-xu-voi-ban-than', 'hanh-dong', 'topic', 'images/hanh-dong/topics', 'topic-hieu-minh-song-nhe'],
  ['hanh-dong.topic.ung-xu-trong-gia-dinh', 'hanh-dong', 'topic', 'images/hanh-dong/topics', 'topic-ung-xu-trong-gia-dinh'],
  ['hanh-dong.topic.loi-noi-va-giao-tiep', 'hanh-dong', 'topic', 'images/hanh-dong/topics', 'topic-loi-noi-va-giao-tiep'],
  ['hanh-dong.topic.ung-xu-ngoai-xa-hoi', 'hanh-dong', 'topic', 'images/hanh-dong/topics', 'topic-tu-te-ngoai-xa-hoi'],
  ['hanh-dong.topic.tinh-huong-thuong-gap', 'hanh-dong', 'topic', 'images/hanh-dong/topics', 'topic-tinh-huong-thuong-gap'],
  ['hanh-dong.section.bat-dau-trong-7-ngay', 'hanh-dong', 'section', 'images/hanh-dong/sections', 'section-bat-dau-trong-7-ngay'],
];

let insertion = '\r\n';
for (const [id, branch, kind, dir, base] of newSlots) {
  insertion += `  {\r\n    id: "${id}",\r\n    branch: "${branch}",\r\n    kind: "${kind}",\r\n    targetDir: "${dir}",\r\n    targetBaseName: "${base}",\r\n    fallbackSlotId: "",\r\n  },\r\n`;
}

const newT = t.slice(0, insertPos) + insertion + t.slice(insertPos);
writeFileSync(filePath, newT, 'utf8');
console.log(`Done. Added ${newSlots.length} slots. New file size: ${newT.length} chars.`);
