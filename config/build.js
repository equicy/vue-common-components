const appName = process.argv[2]

const fs = require("fs")

const exec = require("child_process").execSync;
exec("npm run build", { stdio: "inherit", env: { ...process.env, VUE_APP_NAME: appName } });
