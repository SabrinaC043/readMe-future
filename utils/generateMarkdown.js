// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return ''
  }
  return `![gitHub badge](https://img.shields.io/badge/LICENSE-${license}-purple.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return ''
  }
  return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return ''
  }
  return `## License
 
 Your license is covered under: ${license}
 `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)
    }

## Description

${data.description} 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributions](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributors}

## Tests

${data.tests}

## Questions? Contact Me


GitHub: [Link to GitHub](https://github.com/${data.gitHub})

Email me at: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
