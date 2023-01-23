// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// module.exports = generateMarkdown;

//---- function to generate markdown for README document ----//

function generateMarkdown(data) {
  
  return `
  
# ${data.title}  
---------------------------------------------------------------

## Table of Contents 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing Guidelines](#guidelines)
* [Tests](#tests)
* [Questions](#questions)



## Description
${data.description}


## Installation
${data.installation}


## Usage
In order to use this app, you need to ${data.usage}


## Contributing Guidelines
${data.guidelines}


## License
This project is licensed under the ${data.license} license. 


## Tests
${data.test}


## Questions
Contact me for any questions, suggestions or future development ideas:

* GitHub: https://github.com/${data.username}
* email: ${data.email}

`
}



module.exports = generateMarkdown;

// Ideas to generate license and license badge
// ${renderLicenseBadge(data.license)}
//// Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseLink;

//   // select correct license link for the selected license
//   switch(license) {
//     case "MIT":
//       licenseLink = "https://mit-license.org/";
//       break;
//     case "BSD":
//       licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
//       break;
//     case "GPL":
//       licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
//       break;
//     case "Apache":
//       licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
//       break;
//     default:
//       licenseLink = "";
//       break;
//   }
  
//   return licenseLink;
// }
// function renderLicenseBadge(license) {
//   let badge = "";

//   if(license != "None") {
//     badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
//   }

//   return badge;
// }

// ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)