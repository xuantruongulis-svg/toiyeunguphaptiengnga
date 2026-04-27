const fs = require('fs');
const path = require('path');

const verbs = [
  'pisat', 'chitat', 'govorit', 'skazat', 'smotret', 
  'glyadet', 'videt', 'slushat', 'slyshat', 'dumat', 
  'rabotat', 'delat', 'gotovit', 'zhit'
];

const theoryDir = path.join(__dirname, 'src', 'theory');
const exerciseDir = path.join(__dirname, 'src', 'exercise');

verbs.forEach(v => {
  const theoryContent = `import React from 'react';

export default function Theory() {
  return (
    <div className="theory-content">
      <h2>Lý thuyết cho động từ: ${v}</h2>
      <p>Nội dung lý thuyết đang được cập nhật...</p>
      <ul>
        <li>Quy tắc 1...</li>
        <li>Quy tắc 2...</li>
      </ul>
    </div>
  );
}
`;
  const exerciseContent = `import React from 'react';

export default function Exercise() {
  return (
    <div className="exercise-content">
      <h2>Bài tập cho động từ: ${v}</h2>
      <p>Hãy hoàn thành các bài tập dưới đây:</p>
      <div className="question">
        <p>1. Chia động từ ${v} trong câu...</p>
        <input type="text" placeholder="Câu trả lời..." />
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(theoryDir, `${v}.jsx`), theoryContent);
  fs.writeFileSync(path.join(exerciseDir, `${v}.jsx`), exerciseContent);
});

console.log('Generated placeholder files successfully!');
