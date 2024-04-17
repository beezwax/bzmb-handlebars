const populate = require("./populate.js");

const source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
"{{kids.length}} kids:</p>" +
"<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
const data = { "name": "Alan", "hometown": "Somewhere, TX",
"kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
const result = populate(source, data);
console.log(result);
