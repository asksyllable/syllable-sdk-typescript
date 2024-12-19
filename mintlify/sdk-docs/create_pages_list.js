const fs = require('fs');
const path = require('path');

function getMarkdownFiles(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        const markdownFiles = files
            .filter(file => path.extname(file) === '.md')
            .map(file => '/sdk-docs/' + dir + '/' + path.basename(file, '.md'));

        const result = { pages: markdownFiles };
        console.log(JSON.stringify(result, null, 2));
    });
}

// Example usage: node script.js /path/to/directory
const directory = process.argv[2];
if (directory) {
    getMarkdownFiles(directory);
} else {
    console.error('Please provide a directory as an argument.');
}
