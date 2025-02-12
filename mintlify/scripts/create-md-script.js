const fs = require('fs');
const path = require('path');

function updateMarkdownFiles(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);
            if (path.extname(file) === '.md') {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading file: ${err}`);
                        return;
                    }

                    const lines = data.split('\n');
                    if (lines[0].startsWith('#')) {
                        const title = lines[0].substring(1).trim();
                        lines[0] = `---\ntitle: '${title}'\n---`;
                        const updatedData = lines.join('\n');

                        fs.writeFile(filePath, updatedData, 'utf8', err => {
                            if (err) {
                                console.error(`Error writing file: ${err}`);
                            } else {
                                console.log(`Updated file: ${filePath}`);
                            }
                        });
                    }
                });
            }
        });
    });
}

// Example usage: node script.js /path/to/directory
const directory = process.argv[2];
if (directory) {
    updateMarkdownFiles(directory);
} else {
    console.error('Please provide a directory as an argument.');
}
