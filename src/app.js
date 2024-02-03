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

  function generateDomainNames() {
    let domainNames = [];

    for (let pronoun of pronouns) {
      for (let adj of adjs) {
        for (let noun of nouns) {
          let domainName = pronoun + adj + noun + ".com";
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

    return domainNames;
  }

  let result = generateDomainNames();
  console.log(result);
};
