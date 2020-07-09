import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';

export function exportDoc(htmlString) {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Word Document</title>
    </head>
    <header>Some Header Text</header>
    <body>${htmlString}</body>
    <footer>Some Footer Text</footer>
  </html>
  `;
  const doc = htmlDocx.asBlob(html);
  saveAs(doc, 'document.docx');
}
