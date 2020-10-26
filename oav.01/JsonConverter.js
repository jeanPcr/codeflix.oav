const fs = require("fs");
const path = require("path");

module.exports.parseEnv = function parseEnv(filename) {
  let regexSection = /#.[^#]*/gms;
  let regexSectionTitle = /^#\s*([\da-zA-Z\s]*)$/gm;
  let regexKeyValue = /^[a-zA-Z].*=.*$/gm;
  let myJson = {};
  let m;
  let file = fs.readFileSync(filename, "utf8");

  while ((m = regexSection.exec(file)) !== null) {
    if (m.index === regexSection.lastIndex) {
      regexSection.lastIndex++;
    }
    m.forEach((match) => {
      let title = match
        .match(regexSectionTitle)[0]
        .match(/\b[\dA-Z\s]*\S$/gm)[0];
      let keysValues = match.match(regexKeyValue);
      keysValues.forEach((keyValue) => {
        let key = keyValue.split("=")[0];
        let value = keyValue.split("=")[1];
        myJson[title] = { ...myJson[title], [key]: value };
      });
    });
  }

  //console.log(myJson);
  let data = JSON.stringify(myJson);
  let jsonFile = path.basename(filename);

  fs.writeFileSync(`${jsonFile}.json`, data);
  console.log(`File ${jsonFile}.json has been successfully created !`);
};

/**IN PROGRES .... */

module.exports.parseIni = function parseIni(filename) {
  let regexSection = /\[.[^\[]*/gms;
  let regexSectionTitle = /^\[[^;].*\]/gm; // /^\[.*\]$/gm
  let regexKeyValue = /^[^;\[]*\S$/gm;
  let myJson = {};
  let m;
  let file = fs.readFileSync(filename, "utf8");

  while ((m = regexSection.exec(file)) !== null) {
    if (m.index === regexSection.lastIndex) {
      regexSection.lastIndex++;
    }
    m.forEach((match) => {
      //console.log(match);
      let title = match.match(regexSectionTitle);
      console.log(title);
      //.match(/\b[\dA-Z\s]*\S$/gm)[0];
      // let keysValues = match.match(regexKeyValue);
      // keysValues.forEach((keyValue) => {
      //   let key = keyValue.split("=")[0];
      //   let value = keyValue.split("=")[1];
      //   myJson[title] = { ...myJson[title], [key]: value };
      // });
    });
  }

  //console.log(myJson);
  // let data = JSON.stringify(myJson);
  // let jsonFile = path.basename(filename);

  // fs.writeFileSync(`${jsonFile}.json`, data);
  // console.log(`File ${jsonFile}.json has been successfully created !`);
};
