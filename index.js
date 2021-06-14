// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for the project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does the project require?',
        choices: ['Apache', 'MIT', 'GPL']
      },
      {
        type: 'input',
        name: 'contributingTests',
        message: 'Enter the test instructions for the project',
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Enter your Github username.',
      },
      {
        type: 'input',
        name: 'emailAdress',
        message: 'Enter your email address.',
      },
    ]
    // .then((answers) => {
    //     const readMeContent = writeFile(answers);
    
    //     fs.writeFile('README.md', readMeContent, (err) =>
    //       err ? console.log(err) : console.log('Successfully created README!')
    //     );
    //   });
// TODO: Create a function to write README file
function writeToFile(readMeContent) {
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
    )}
// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
