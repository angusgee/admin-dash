const fs = require('node:fs').promises;
const path = require('node:path');

async function addFillToSVGs(): Promise<void> {
  try {
    const iconDir = './icons'
    const files = await fs.readdir(iconDir)
    console.log("Files found: ", files);

    const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg')

    console.log("SVG files identified: ", svgFiles);

    for (const file of svgFiles) {
      const filepath = path.join(iconDir, file)
      console.log("filepath: ", filepath);
      const data: string = await fs.readFile(filepath, 'utf8')

      if (!data.includes('fill="')) {
        const updatedContent = data.replace("<path ", '<path fill="#FFFFFF" ')
        await fs.writeFile(filepath, updatedContent)
        console.log("Successfully updated: ", file);
      }

    }

    console.log("All files processed!");

  } catch (error) {
    console.log("Error processing files: ", error);
  }
}

addFillToSVGs()