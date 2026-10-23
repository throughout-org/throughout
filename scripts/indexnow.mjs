// Pings IndexNow (Bing, Yandex and others) with every URL in the live sitemap.
// Usage: node scripts/indexnow.mjs [sitemapUrl]
const HOST = "www.throughout.io";
const KEY = "5e0a5cb109f65c91b6e32848ad2faf6a"; // served at https://www.throughout.io/<KEY>.txt from /public
const sitemapUrl = process.argv[2] || `https://${HOST}/sitemap.xml`;

const xml = await (await fetch(sitemapUrl)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) throw new Error(`No URLs found in ${sitemapUrl}`);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, HTTP ${response.status}`);
