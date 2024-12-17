var fs = require('node:fs');
var content = fs.readFile('./icons/cog.svg', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    var updatedContent = data.replace("<path ", '<path fill="#FFFFFF" ');
    fs.writeFile('./icons/cog.svg', updatedContent, function (err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log("file written successfully!");
        }
    });
});
