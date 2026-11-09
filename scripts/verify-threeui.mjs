import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const REQUIRED_SOURCE_FILES = [
  {
    file: "src/shaders/landing-pages/LandingPages.tsx",
    sha256: "4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a",
  },
  {
    file: "src/shaders/landing-pages/pageTypography.ts",
    sha256: "809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc",
  },
  {
    file: "src/shaders/landing-pages/pageRecipes.ts",
    sha256: "c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233",
  },
  {
    file: "src/shaders/landing-pages/LandingPageFrame.tsx",
    sha256: "61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78",
  },
  {
    file: "public/landing-pages/inner-green-3d.html",
    sha256: "69c3694bd63f44ef9f007ebe4dac57a83e4402e0cdf6b54dd10b96dd4f05e197",
  },
  {
    file: "public/landing-pages/inner-green-assets/three.min.js",
    sha256: "8a5f7249903b54d30f79f708699d2fed2d6a1d0741a4cd41377d1f01bb5a2271",
  },
  {
    file: "src/shaders/threeui.css",
    sha256: "efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf",
  },
];

const REQUIRED_BINARY_ASSETS = [
  {
    file: "public/landing-pages/inner-green-assets/card-ecostove.jpg",
    size: 290988,
    sha256: "70ce084084902bc502f00c366405b661ecdff90dee95d363b36a6e146829e433",
  },
  {
    file: "public/landing-pages/inner-green-assets/card-ethos.jpg",
    size: 316720,
    sha256: "337627390f499b3ae272cec9e2f83c817694a82f42e1aa10a7b26a2c7d679dff",
  },
  {
    file: "public/landing-pages/inner-green-assets/lexend-latin.woff2",
    size: 39692,
    sha256: "1ec8f6ee2750554b4bc59ff0b507d316a82a7ba37e0e5bebc41d3bd9b9faad46",
  },
];

let allPassed = true;

console.log("=== THREEUI SYLVA HERO (05f359ce157a) INTEGRITY VERIFICATION ===");

for (const item of [...REQUIRED_SOURCE_FILES, ...REQUIRED_BINARY_ASSETS]) {
  const fullPath = path.resolve(process.cwd(), item.file);
  if (!fs.existsSync(fullPath)) {
    console.error(`[FAIL] Missing file: ${item.file}`);
    allPassed = false;
    continue;
  }
  const buffer = fs.readFileSync(fullPath);
  const actualHash = crypto.createHash("sha256").update(buffer).digest("hex");
  const sizeCheck = item.size !== undefined ? buffer.length === item.size : true;
  const hashCheck = actualHash === item.sha256;

  if (sizeCheck && hashCheck) {
    console.log(`[PASS] ${item.file} (${buffer.length} bytes, sha256=${actualHash.slice(0, 12)}...)`);
  } else {
    console.error(
      `[FAIL] ${item.file} | Expected sha256=${item.sha256}, Actual=${actualHash} | Expected size=${item.size ?? "any"}, Actual=${buffer.length}`,
    );
    allPassed = false;
  }
}

if (!allPassed) {
  process.exit(1);
}
console.log("=== ALL 10 REQUIRED SOURCE & BINARY FILES VERIFIED 100% BYTE-EXACT ===");
