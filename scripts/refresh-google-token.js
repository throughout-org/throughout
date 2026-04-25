#!/usr/bin/env node

/**
 * Run: node scripts/refresh-google-token.js
 */

const readline = require("readline");
const https = require("https");

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent("https://www.googleapis.com/auth/drive.file")}&access_type=offline&prompt=consent`;

console.log("\n🔐 Step 1: Open this URL in your browser:\n");
console.log(authUrl);
console.log(
  `\n🔐 Step 2: After authorizing, copy the "code" param from the redirect URL\n`,
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Paste the authorization code: ", (code) => {
  rl.close();

  const postData = new URLSearchParams({
    code: code.trim(),
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  }).toString();

  const req = https.request(
    {
      hostname: "oauth2.googleapis.com",
      path: "/token",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    },
    (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        const response = JSON.parse(data);
        if (response.refresh_token) {
          console.log("\n✅ Update your .env:\n");
          console.log(`GOOGLE_REFRESH_TOKEN=${response.refresh_token}\n`);
        } else {
          console.error("\n❌ Failed:", JSON.stringify(response, null, 2));
        }
      });
    },
  );

  req.write(postData);
  req.end();
});
