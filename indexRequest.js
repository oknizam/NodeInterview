const https = require("https");

for (let i = 0; i < 6; i++) {
  let start = new Date();
  https.request("https://json-placeholder.mock.beeceptor.com/posts", (res) => {
    let body = "";
    res.on("data", chunk => {
      body += chunk;
    });
    res.on("end", () => {
      console.log(`${i + 1} time in miliseconds`, new Date() - start);
    });
  }).end()
}


