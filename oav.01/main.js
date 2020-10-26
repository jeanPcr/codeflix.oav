const JsonConverter = require("./JsonConverter");
const path = require("path");

let file = process.argv[2];

if (file !== null && file !== "") {
  switch (path.extname(file)) {
    case "":
      JsonConverter.parseEnv(file);
      break;
    case ".ini":
      JsonConverter.parseIni(file);
      break;
    default:
      break;
  }
}
