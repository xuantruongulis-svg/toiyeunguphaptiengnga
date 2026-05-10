import fs from 'fs';

const filePath = '../src/vid_glagola/data/ex_vid_glagola.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace property names
content = content.replace(/instruction:/g, 'description:');
content = content.replace(/ q: /g, ' sentence: ');

// Fix the 'correct: 0' to 'correct: options[0]'
// Since the correct option is always the first one in the 'options' array in my previous script, I can use regex to extract the first option and replace correct: 0 with correct: 'the_first_option'

// I'll parse it as JS using eval or just write a regex replacer
// Wait, I can't just eval because it's a string with export.
content = content.replace(/export const vidGlagolaExercises = (\[[\s\S]*?\]);/, (match, p1) => {
  let arr = eval(p1);
  arr = arr.map(ex => {
    ex.description = ex.instruction || ex.description;
    delete ex.instruction;
    
    ex.questions = ex.questions.map(q => {
      return {
        sentence: q.q || q.sentence,
        options: q.options,
        correct: q.options[q.correct] !== undefined ? q.options[q.correct] : q.correct,
        why: q.explain || q.why
      };
    });
    return ex;
  });
  return 'export const vidGlagolaExercises = ' + JSON.stringify(arr, null, 2) + ';';
});

fs.writeFileSync(filePath, content);
console.log('Fixed exercises structure');
