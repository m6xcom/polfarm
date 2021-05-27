module.exports = {
  src: {
    html: "src/*.html",
    css: "src/styles/sass/main.scss",
    js: "src/js/**/*.js",
    images: "src/images/**/*",
  },
  watch: {
    html: "src/**/*.html",
    css: "src/styles/sass/**/*.scss",
    js: "src/js/**/*.js",
    images: "src/images/**/*",
  },
  build: {
    html: "build/",
    css: "build/css",
    js: "build/js",
    images: "build/images",
  },
  inject: {
    html: "build/index.html",
    css: "build/css/**/*.css",
    js: "build/js/**/*.js",
  },
  clean: "build/",
};
