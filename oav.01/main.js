const JsonConverter = require("./JsonConverter");
const path = require("path");

let file = process.argv[2];
console.log(path.extname(file));

if (file !== null && file !== "") {
  switch (path.extname(file)) {
    case "":
      JsonConverter.parseEnv(file);
      break;
    case ".ini":
      JsonConverter.parseIni(file);
      break;
    default:
      console.error("Wrong file format, try again with .env or .ini files.");
      break;
  }
}
