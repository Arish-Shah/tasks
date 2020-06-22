export function createFile(htmlString) {
  const css = `
    h2 {
      color: red;
    }
  `;

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

  return { html, css };
}