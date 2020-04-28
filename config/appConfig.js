const appName = require("./app.js")
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}
const config = {
  star: {
    pages: {
      index: {
        entry: "src/app/star/main.ts",
        template: "public/indexStar.html",
        filename: "index.html"
      }
    },
    outputDir: "dist/star/",
    devServer: {},
    chainWebpack: (config) => {
      config.entry.app = ["babel-polyfill", "../src/app/star/main.ts"]
      config.resolve.alias.set("@", resolve("../src/app/star/")).set("%", resolve("../src/common"))
    }
  },
  country: {
    pages: {
      index: {
        entry: "src/app/country/main.ts",
        template: "public/indexCountry.html",
        filename: "index.html",
      }
    },
    outputDir: "dist/country/",
    devServer: {},
    chainWebpack: (config) => {
      config.entry.app = ["babel-polyfill", "../src/app/country/main.ts"]
      config.resolve.alias.set("@", resolve("../src/app/country/")).set("%", resolve("../src/common"))
    }
  }
}

const configObj = config[appName.name]

module.exports = configObj
