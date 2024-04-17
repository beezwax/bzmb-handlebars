const Handlebars = require("handlebars");

const populate = (source, data) => {
  const template = Handlebars.compile(source);
  return template(data);
}

module.exports = populate;