// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Description
<p> 
${data.description} </p>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributors)
* [Tests](#tests)


### Installation
---
${data.install}


### Usage
---

${data.usage}

### License
----
${data.licenses}

### Contributing
---
${data.contributors}



### Tests


---

${data.tests}

## Questions? Contact Me
---

GitHub User Name:${data.gitHub}

#### Email me at: <link> ${data.email} <link>
`;
}

module.exports = generateMarkdown;
