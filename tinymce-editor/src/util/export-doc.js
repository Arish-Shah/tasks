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
    <body>${htmlString}</body>
  </html>
  `;
  const doc = htmlDocx.asBlob(html);
  saveAs(doc, 'document.doc');
}
