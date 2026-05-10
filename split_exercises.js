import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'formy_glagola', 'data', 'ex_deeprichastie.js');
const content = fs.readFileSync(filePath, 'utf8');

// We can just regex out the content or since it's just an array, we can use a small hack
let dataStr = content.replace('export const deeprichastieExercises = ', '').trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);
const data = JSON.parse(dataStr);

const mixExercises = data.filter(ex => ex.num >= 68);
const pureDeeprichastie = data.filter(ex => ex.num < 68);

const newDeepContent = 'export const deeprichastieExercises = ' + JSON.stringify(pureDeeprichastie, null, 2) + ';\n';
fs.writeFileSync(filePath, newDeepContent, 'utf8');

const mixPath = path.join(__dirname, 'src', 'formy_glagola', 'data', 'ex_mix_prich_deeprich.js');
const newMixContent = 'export const mixExercises = ' + JSON.stringify(mixExercises, null, 2) + ';\n';
fs.writeFileSync(mixPath, newMixContent, 'utf8');

console.log('Split exercises successfully.');
