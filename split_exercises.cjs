const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'formy_glagola', 'data', 'ex_deeprichastie.js');
let data = require('./src/formy_glagola/data/ex_deeprichastie.js').deeprichastieExercises;

// Separate the first exercises and the last 5 mixed exercises
const mixExercises = data.filter(ex => ex.num >= 68);
const pureDeeprichastie = data.filter(ex => ex.num < 68);

// Write ex_deeprichastie.js
const newDeepContent = 'export const deeprichastieExercises = ' + JSON.stringify(pureDeeprichastie, null, 2) + ';\n';
fs.writeFileSync(filePath, newDeepContent, 'utf8');

// Write ex_mix_prich_deeprich.js
const mixPath = path.join(__dirname, 'src', 'formy_glagola', 'data', 'ex_mix_prich_deeprich.js');
const newMixContent = 'export const mixExercises = ' + JSON.stringify(mixExercises, null, 2) + ';\n';
fs.writeFileSync(mixPath, newMixContent, 'utf8');

console.log('Split exercises successfully.');
