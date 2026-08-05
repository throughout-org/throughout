#!/usr/bin/env node

import https from "node:https";
import readline from "node:readline";

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI} = process.env;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REDIRECT_URI) {
  console.error("Set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REDIRECT_URI before running this script.");
  process.exit(1);
}

const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(GOOGLE_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent("https://www.googleapis.com/auth/drive.file")}&access_type=offline&prompt=consent`;

console.log("\nStep 1: Open this URL in your browser:\n");
console.log(authUrl);
console.log("\nStep 2: After authorizing, copy the code parameter from the redirect URL.\n");

const prompt = readline.createInterface({input: process.stdin, output: process.stdout});

prompt.question("Paste the authorization code: ", (code) => {
  prompt.close();

  const postData = new URLSearchParams({
    code: code.trim(),
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code",
  }).toString();

  const request = https.request(
    {
      hostname: "oauth2.googleapis.com",
      path: "/token",
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
    },
    (response) => {
      let data = "";
      response.on("data", (chunk) => { data += chunk; });
      response.on("end", () => {
        const result = JSON.parse(data);
        if (result.refresh_token) {
          console.log(`\nGOOGLE_REFRESH_TOKEN=${result.refresh_token}\n`);
        } else {
          console.error("\nToken exchange failed:", JSON.stringify(result, null, 2));
        }
      });
    },
  );

  request.on("error", (error) => console.error("Token request failed:", error));
  request.write(postData);
  request.end();
});
