const appName = process.argv[2]

const fs = require("fs")

fs.writeFileSync("./config/app.js", `exports.name = "${appName}"`)

const exec = require("child_process").execSync;
exec("npm run serve", { stdio: "inherit" });
