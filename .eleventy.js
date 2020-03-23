const sass = require("./config/sass-process");

module.exports = config => {
  //Watching for modificaions in style directory
  sass("./scss/styles.scss", "./_site/css/styles.css");
};
