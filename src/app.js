/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  function generateDomainNames() {
    let domainNames = [];

    for (let pronoun of pronouns) {
      for (let adj of adjs) {
        for (let noun of nouns) {
          for (let ext of extensions) {
            let domainName = pronoun + adj + noun + ext;
            domainNames.push(domainName);

            let hackDomain =
              pronoun +
              adj +
              noun.substring(0, noun.length - 2) +
              "." +
              noun.slice(-2);
            domainNames.push(hackDomain);
          }
        }
      }
    }

    return domainNames;
  }

  let result = generateDomainNames();
  console.log(result);
};
