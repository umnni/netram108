
import { chromium } from "playwright";
import { preview } from "vite";
import { writeFile } from "node:fs/promises";

let server;
let browser;

try {
  server = await preview({
    preview: {
      host: "127.0.0.1",
      port: 4173,
      strictPort: false,
    },
  });

  const address = server.httpServer.address();
  const url = `http://127.0.0.1:${address.port}/`;

  browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle",
  });

  await page.locator("#plot-108").waitFor();
  await page.locator("#plot-200").waitFor();

  const html = await page.content();

  if (
    !html.includes("42.99") ||
    !html.includes("79.99")
  ) {
    throw new Error("Plot content missing in HTML");
  }

  await writeFile("dist/index.html", html, "utf8");

  console.log("Netram prerendering completed!");
  console.log("108 Gaj and 200 Gaj content found.");
} catch (error) {
  console.error("Prerendering failed:", error);
  process.exitCode = 1;
} finally {
  await browser?.close();
  await new Promise((resolve) => {
    if (!server) return resolve();
    server.httpServer.close(resolve);
  });
}
