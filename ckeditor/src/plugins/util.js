export function createFile(htmlString) {
  const styles = `
    * {
      font-family: Arial, Helvetica, sans-serif;
    }
  `;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Word Document</title>
        <style>
          ${styles}
        </style>
      </head>
      <body>${htmlString}</body>
    </html>
  `;
}
