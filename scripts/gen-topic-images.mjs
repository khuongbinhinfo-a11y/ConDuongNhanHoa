import sharp from "sharp";

const tasks = [
  {
    src: "public/images/hanh-dong/topics/topic-loi-noi-va-giao-tiep.png",
    dest: "public/images/hanh-dong/topics/topic-giu-ket-noi-khi-bat-dong.png",
    // cool blue overlay — kết nối, đối thoại khi bất đồng
    tint: [0, 60, 120, 0.22],
  },
  {
    src: "public/images/hanh-dong/topics/topic-hieu-minh-song-nhe.png",
    dest: "public/images/hanh-dong/topics/topic-biet-khi-nao-lui-buoc.png",
    // warm amber overlay — dừng lại, suy ngẫm, sức mạnh bên trong
    tint: [160, 100, 0, 0.18],
  },
  {
    src: "public/images/hanh-dong/topics/topic-ung-xu-trong-gia-dinh.png",
    dest: "public/images/hanh-dong/topics/topic-cam-on-va-noi-nho-dung-luc.png",
    // warm rose overlay — cảm xúc ấm áp, biết ơn
    tint: [180, 60, 60, 0.15],
  },
];

for (const t of tasks) {
  const meta = await sharp(t.src).metadata();
  const w = meta.width;
  const h = meta.height;
  const [r, g, b, a] = t.tint;
  const svg = `<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="rgba(${r},${g},${b},${a})"/></svg>`;
  await sharp(t.src)
    .composite([{ input: Buffer.from(svg), blend: "over" }])
    .png({ quality: 90 })
    .toFile(t.dest);
  console.log("Created:", t.dest, `${w}x${h}`);
}
