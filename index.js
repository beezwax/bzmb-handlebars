const populate = require("./populate.js");

const populateSchema = {
  body: {
    type: "object",
    required: [
      "source",
      "data"
    ],
    properties: {
      source: {
        type: "string"
      },
      data: {
        type: "object"
      }
    }
  }
}

function bzmbHandlebars(fastify, options) {
  fastify.post(
    "/bzmb-handlebars-populate",
    { schema: populateSchema },
    (req, res) => {
      try {
        const { source, data } = req.body;
        const result = populate(source, data);
        res
          .code(200)
          .send(result);
      } catch (error) {
        res
          .code(500)
          .send(error);
      }
    }
  );
}

module.exports = { microbond: bzmbHandlebars };
