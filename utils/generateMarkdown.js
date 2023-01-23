const licenseArray = ["APACHE 2.O", "BSD 3-clause license", "Mozilla Public License 2.0","Microsoft Public License", "MIT", "Open Software License 3.0", "None"]


function renderLicenseBadge(license) {
  if (license === licenseArray[0]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license === licenseArray[1]){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === licenseArray[2]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === licenseArray [3]){
    return "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-lightgrey.svg)](https://opensource.org/licenses/MS-PL)"
  } else if (license === licenseArray[4]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenseArray [5]){
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)"
  } else {
    return "" 
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

function renderLicenseLink(license) {
  if (license === licenseArray[0]) {
    return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === licenseArray[1]) {
    return `[${licenseArray[1]}](https://opensource.org/licenses/BSD-3-Clause)`

  } else if (license === licenseArray[2]) {
    return `[${licenseArray[2]}](https://opensource.org/licenses/MPL-2.0)`

  } else if (license === licenseArray[3]) {
    return `[${licenseArray[3]}](https://opensource.org/licenses/MS-PL)`

  } else if (license === licenseArray[4]) {
    return `[${licenseArray[4]}](https://opensource.org/licenses/MIT)`
  
  } else if (license === licenseArray[5]) {
    return `[${licenseArray[5]}](https://opensource.org/licenses/OSL-3.0)`
  } else {
    return ""
  } 
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}



//${renderLicenseSection(data.license)}




//---- function to generate markdown for README document ----//

function generateMarkdown(data) {
  
  return `
  
# ${data.title}      ${renderLicenseBadge(data.license)} 

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
${renderLicenseLink(data.license)}



## Tests
${data.test}


## Questions
Contact me for any questions, suggestions or future development ideas:

* GitHub: https://github.com/${data.username}
* email: ${data.email}

`
}



module.exports = generateMarkdown;

