const fs = require('node:fs');

const content: string = fs.readFile('./icons/cog.svg', 'utf8', (err, data: string) => {
  if (err) {
    console.error(err);
    return;
  }
  const updatedContent = data.replace("<path ", '<path fill="#FFFFFF" ')
  fs.writeFile('./icons/cog.svg', updatedContent, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully!");
    }
  });
});



