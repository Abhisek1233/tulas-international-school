import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outBase = path.join(rootDir, 'public', 'assets');

const BASE_URL = 'https://tis.edu.in/_next/static/media';

const ASSETS = {
  brand: [
    'schoolLogo.95f6e121.png',
    'footer-logo.230b79ff.png'
  ],
  campus: [
    'schoolTopView.6e263e02.webp'
  ],
  doodles: [
    'yellowLine1.5c94b3b6.svg',
    'downArrowDoodle.77b2728b.svg',
    'petal1.e89e415d.svg',
    'petal-2.57797264.webp',
    'petal-3.1aec06e8.svg',
    'commas.f9c745a3.svg',
    'see-more-text.b85bc127.png'
  ],
  hero: [
    'Image 2.0c5295c9.webp',
    'polo.973ddbae.webp',
    'Image 3.21dc9e69.webp',
    'karate.4020fba5.webp',
    'swimming.6fc81e65.webp',
    'Image 1.0a814859.webp',
    'pot.6f7c2ee3.webp',
    'dance.88843edb.webp'
  ],
  voices: [
    'ladyInPink.c358aa8f.png',
    'madeForFuture.e96fe7c1.png',
    'manInBlue.46316cbf.png',
    'AtTIS.59351600.png'
  ],
  sports: [
    'archery.7a805345.png',
    'cycling.80dbb9b1.png',
    'hockey.219fe552.png',
    'swimming.d4285534.png',
    'taekwando.86e26406.png',
    'football.ca61e5d0.png',
    'shooting.b0b11d74.png',
    'horseRiding.8f259127.png',
    'billiards-single.a1e831c6.png',
    'squash.ffa0360a.png',
    'volleyball.045be884.png',
    'basketball.fa70909d.png',
    'Cricket.b06b18ca.png',
    'lawnTennis.7b3b894a.png',
    'badminton.a314ff00.png',
    'tableTennis.61f6bd56.png'
  ],
  stats: [
    'campus.e67b1a0a.png',
    'sports.e695b690.png',
    'image3.b8273b93.png',
    'medical.e87071fe.png',
    'image2.5d908b38.webp',
    'ratio.6ca07c6a.png',
    'image1.a3011dda.png',
    'ranking.157c5a68.png',
    'see-all-activities.c481082d.png'
  ],
  personalities: [
    'SakshiMalik.91174bf4.webp',
    'VisheshBhriguvanshi.52af8bfd.webp',
    'PrakashiTomar.339dbb95.webp',
    'AbhishekVerma.18f9d349.webp',
    'AditiGopichandSwami.b7afa246.webp',
    'JeevanJyotSinghTeja.9a07711c.webp',
    'OjasPravinDeotale.1d2e01cc.webp',
    'RajatChauhan.bcb1fbf2.webp',
    'DevendraSinghBisht.09635f71.webp',
    'ManishMetani.ca55bf71.webp',
    'SaurabhJoshi.450ff5df.webp',
    'ArushiNishank.f3341404.webp',
    'LakshmiAgarwal.7405df5d.webp',
    'DhanSinghRawat.f504bd14.webp',
    'TrivendraSinghRawat.c2e8d88b.webp',
    'SubodhUniyal.25533860.webp',
    'RameshPokhriyalNishank.5f11fd77.webp',
    'BhagatSinghKoshyari.f996a329.webp',
    'DharmendraPradhan.cae1e9ae.webp',
    'AnuragTripathi.a8e203b4.webp',
    'ArvindPandey.3f959220.webp',
    'NamamiBansal.97f4f1f0.webp',
    'AbhinavKumar.8cbdb15a.webp',
    'JanmejayaKhanduri.18ae0527.webp',
    'AshokKumar.b9a984fa.webp',
    'AmitKumarSinha.5e245cdc.webp',
    'SunilUniyalGama.55361603.webp',
    'SahdevSinghPundir.7aa9859f.webp'
  ],
  awards: [
    'TopBoarding.e5405c1a.jpg',
    'BestResidential.5173db8d.jpg',
    'UTTARAKHAND.652376d5.jpg'
  ],
  tour: [
    '360.75b351f1.png'
  ],
  reviews: [
    'googleReviewsBackground.3003d907.png',
    'tashi.3807cb3c.png',
    'namita.86a0f799.png',
    'sandeep.1b22b59e.png',
    'pinky.8d7145b0.png',
    'suresh.80d60e49.png',
    'urja.03e3c3f3.png',
    'amit.c7b6247e.png',
    'ashu.9d447126.png',
    'gulabdas.63ce81d8.png',
    'salendra.42b32ea1.png'
  ],
  partners: [
    'Universidad.935e33e1.png',
    'yhnbepcntet.3b80eac6.jpg',
    'Universitat.f7fac869.jpg',
    'Cpi6.106c6037.jpg',
    'inseec.780a3115.png',
    'Trinty.31016999.png',
    'University.6c89dc70.png',
    'International_Award_for_Young_People_logo.a0d1c4fa.jpg',
    'lions.bf493cc1.png',
    'inseecU.1e5c929a.png',
    'Universitas.d9db402c.png',
    'universityLogo.6e446aad.jpg'
  ],
  social: [
    'facebook.71a696dd.svg',
    'twitter.64c93709.svg',
    'linkedin.33acc93c.svg',
    'instagram.80644d47.svg',
    'youtube.044db034.svg'
  ]
};

function cleanFilename(rawFilename) {
  const parts = rawFilename.split('.');
  if (parts.length < 2) return rawFilename.toLowerCase();
  const ext = parts[parts.length - 1];
  // Strip the hash portion (the penultimate item)
  const baseParts = parts.slice(0, -2);
  const base = baseParts.length > 0 ? baseParts.join('.') : parts[0];
  const clean = base.trim().toLowerCase().replace(/\s+/g, '-');
  return `${clean}.${ext}`;
}

async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { ok: false, status: res.status, url };
    }
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.promises.writeFile(destPath, buffer);
    return { ok: true, size: buffer.length };
  } catch (err) {
    return { ok: false, error: err.message, url };
  }
}

async function run() {
  console.log('Downloading official TIS assets from tis.edu.in...');
  const failed = [];
  let downloadedCount = 0;

  for (const [group, files] of Object.entries(ASSETS)) {
    const groupDir = path.join(outBase, group);
    await fs.promises.mkdir(groupDir, { recursive: true });

    for (const f of files) {
      const cleanName = cleanFilename(f);
      const dest = path.join(groupDir, cleanName);
      const encodedFile = encodeURIComponent(f);
      const url = `${BASE_URL}/${encodedFile}`;

      process.stdout.write(`Fetching ${group}/${cleanName}... `);
      const res = await downloadFile(url, dest);
      if (res.ok) {
        console.log(`OK (${(res.size / 1024).toFixed(1)} KB)`);
        downloadedCount++;
      } else {
        console.log(`FAILED (${res.status || res.error})`);
        failed.push({ url, group, file: f, cleanName });
      }
    }
  }

  console.log('\n=======================================');
  console.log(`Downloaded ${downloadedCount} assets successfully.`);
  if (failed.length > 0) {
    console.log(`Failed to download ${failed.length} assets:`);
    failed.forEach(item => console.log(` - ${item.url} -> ${item.group}/${item.cleanName}`));
  } else {
    console.log('All listed assets downloaded without errors!');
  }
  console.log('=======================================\n');
}

run();
