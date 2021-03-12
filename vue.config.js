const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "组件库";

module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.join(__dirname, "styles")]
        },
        implementation: require("sass") // This line must in sass option
      }
    }
  }
};
