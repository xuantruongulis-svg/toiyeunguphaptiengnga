const fs = require('fs');

const html = fs.readFileSync('src/theory/baitap_rabotat_delat.html', 'utf8');

// Extract body
let bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let body = bodyMatch ? bodyMatch[1] : '';

// Convert class to className
body = body.replace(/class=/g, 'className=');

// Self-close tags
body = body.replace(/<br>/g, '<br/>');
body = body.replace(/<hr>/g, '<hr/>');
body = body.replace(/<img>/g, '<img/>');
body = body.replace(/<input([^>]*?[^\/])>/g, '<input$1/>'); // close inputs if any

// Fix SVG elements or any attributes like viewBox (React needs camelCase)
body = body.replace(/viewbox=/g, 'viewBox=');
body = body.replace(/stroke-width=/g, 'strokeWidth=');
body = body.replace(/stroke-linecap=/g, 'strokeLinecap=');
body = body.replace(/stroke-linejoin=/g, 'strokeLinejoin=');

// Remove HTML comments
body = body.replace(/<!--[\s\S]*?-->/g, '');

const jsx = `import React from 'react';
import './rabotat_delat.css';

export default function RabotatDelatExercise() {
  return (
    <div className="combined-exercise">
      ${body}
    </div>
  );
}`;

fs.writeFileSync('src/exercise/rabotat_delat_component.jsx', jsx);

// Extract styles
let styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
let style = styleMatch ? styleMatch[1] : '';

// Remove root variables as they might conflict, or scope them
style = style.replace(/:root\s*{/g, '.combined-exercise {');

fs.writeFileSync('src/exercise/rabotat_delat.css', style);

console.log('Conversion successful');
