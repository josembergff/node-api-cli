#!/usr/bin/env node

const yosay = require('yosay');
const inquirer = require('inquirer');
const { exec } = require('child_process');

console.log(yosay('Welcome to the API project manager at Node.js!'));

inquirer
  .prompt([
    {
      type: 'list',
      name: 'NodeApiCLI',
      message: 'Choose what you want to do in your project?',
      choices: [
        'Create new API project with MongoDB',
        'Create new Entity with MongoDB',
        'Create New Route',
        'Create New Controller',
        'Create new Repository with Mongoose',
        'Create new Mongoose Template'
      ]
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
    const acao = 'nac-novo-modelo-api-node-mongoose';
    exec(`yo node-api-cli ${acao} --direct`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`Return: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  });
