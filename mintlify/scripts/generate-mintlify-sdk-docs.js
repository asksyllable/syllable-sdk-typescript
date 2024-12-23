import { readdirSync, statSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { extname, basename, join, dirname } from 'path';

function getMarkdownFilesSync(dir) {
    try {
        const files = readdirSync(dir);
        const markdownFiles = files
            .filter(file => extname(file) === '.md')
            .map(file => 'sdk-docs/' + dir + '/' + basename(file, '.md'));
        return markdownFiles;
    } catch (err) {
        console.error(`Error reading directory: ${err}`);
        return [];
    }
}

function moveAndUpdateFilesSync(srcDir, destDir) {
    const files = readdirSync(srcDir);

    files.forEach(file => {
        const srcPath = join(srcDir, file);
        const stats = statSync(srcPath);

        if (stats.isDirectory()) {
            moveAndUpdateFilesSync(srcPath, destDir); // Recursively move files in subdirectories
        } else if (stats.isFile() && file !== 'Overview.mdx') {
            let destPath;
            if (srcPath.includes('docs/sdks/') && file === 'README.md') {
                const type = srcPath.split('/').slice(-2, -1)[0];
                destPath = join(destDir, 'sdk-docs', `${type}.mdx`);
            } else if (srcPath.includes('docs/models/components/')) {
                const model = basename(file, '.md');
                destPath = join(destDir, 'sdk-docs', 'models', 'components', `${model}.md`);
            } else if (srcPath.includes('docs/models/operations/')) {
                const model = basename(file, '.md');
                destPath = join(destDir, 'sdk-docs', 'models', 'operations', `${model}.md`);
            } else if (srcPath.includes('docs/models/errors/')) {
                const model = basename(file, '.md');
                destPath = join(destDir, 'sdk-docs', 'models', 'errors', `${model}.md`);
            }

            if (destPath) {
                mkdirSync(dirname(destPath), { recursive: true });

                const data = readFileSync(srcPath, 'utf8');

                const lines = data.split('\n');
                if (lines[0].startsWith('#')) {
                    const title = lines[0].substring(1).trim();
                    lines[0] = `---\ntitle: '${title}'\n---`;
                }

                let updatedData = lines.join('\n');
                updatedData = updatedData.replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments  
                updatedData = updatedData.replace(/<Uint8Array>/g, ''); // Remove HTML conflicts
                updatedData = updatedData.replace(/<string, \*string\*>/g, ''); // Remove HTML conflicts
                updatedData = updatedData.replace(/:heavy_check_mark:/g, 'TRUE'); // Replace :heavy-check-mark: with TRUE
                updatedData = updatedData.replace(/:heavy_minus_sign:/g, 'FALSE'); // Replace :heavy-minus-sign: with FALSE
                updatedData = updatedData.replace(/\[([^\]]+)\]\(\.\.\/\.\.\/models\/components\/([^\)]+)\.md\)/g, '[$1](sdk-docs/models/components/$2)'); // Update links
                updatedData = updatedData.replace(/\[([^\]]+)\]\(\.\.\/\.\.\/models\/operations\/([^\)]+)\.md\)/g, '[$1](sdk-docs/models/operations/$2)'); // Update links
                updatedData = updatedData.replace(/\[([^\]]+)\]\(\.\.\/\.\.\/models\/errors\/([^\)]+)\.md\)/g, '[$1](sdk-docs/models/errors/$2)'); // Update links
                updatedData = updatedData.replace(/\[([^\]]+)\]\(\.\.\/\.\.\/models\/errors\/([^\)]+)\.md\)/g, '[$1](sdk-docs/models/errors/$2)'); // Update links
                updatedData = updatedData.replace(/\[([^\]]+)\]\(\.\.\/\.\.\/lib\/utils\/([^\)]+)\.md\)/g, '[$1](sdk-docs/lib/utils/$2)'); // Update links
                updatedData = updatedData.replace(/<\[any\]\(\.\.\/\.\.\/models\/.*\.md\)/g, 'ANY');// Replace <[any](../../models/.md)> with ANY

                // Special fixes for specific files
                updatedData = updatedData.replace("**Promise\\<[ReadableStream](../../models/.md)\\>**", "Promise\\<ReadableStream\\>"); // Fix for ReadableStream
                updatedData = updatedData.replace("**Promise\\<[components.AgentVoice[]](../../models/.md)\\>**", 
                    "**Promise\\<[components.AgentVoice[]](sdk-docs/models/components/agentvoice)\\>**"); // Fix for AgentVoice
                updatedData = updatedData.replace("**Promise\\<[components.PromptHistory[]](../../models/.md)\\>**", 
                    "**Promise\\<[components.PromptHistory[]](sdk-docs/models/components/prompthistory)\\>**"); // Fix for PromptHistory

                writeFileSync(destPath, updatedData, 'utf8');
                console.log(`Moved and updated ${srcPath} to ${destPath}`);
            }
        }
    });
}

function updateMintJsonSync() {
    const mintJsonPath = 'mintlify/mint.json';
    const mintJson = JSON.parse(readFileSync(mintJsonPath, 'utf8'));

    const componentsDir = 'mintlify/sdk-docs/models/components';
    const operationsDir = 'mintlify/sdk-docs/models/operations';
    const errorsDir = 'mintlify/sdk-docs/models/errors';

    const componentsPages = getMarkdownFilesSync(componentsDir);
    const operationsPages = getMarkdownFilesSync(operationsDir);
    const errorsPages = getMarkdownFilesSync(errorsDir);

    const navigation = mintJson.navigation;

    for (let i = 0; i < navigation.length; i++) {
        if (navigation[i].group === 'Models') {
            const modelsGroup = navigation[i].pages;

            for (let j = 0; j < modelsGroup.length; j++) {
                if (modelsGroup[j].group === 'Components') {
                    modelsGroup[j].pages = componentsPages;
                } else if (modelsGroup[j].group === 'Operations') {
                    modelsGroup[j].pages = operationsPages;
                } else if (modelsGroup[j].group === 'Errors') {
                    modelsGroup[j].pages = errorsPages;
                }
            }
        }
    }

    writeFileSync(mintJsonPath, JSON.stringify(mintJson, null, 2), 'utf8');
    console.log('Updated mint.json');
}

// Example usage
moveAndUpdateFilesSync('docs/sdks/', 'mintlify');
moveAndUpdateFilesSync('docs/models/', 'mintlify');
updateMintJsonSync();