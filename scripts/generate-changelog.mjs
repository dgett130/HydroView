import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { default: conventionalChangelog } = await import('conventional-changelog');

const outputPath = path.join(__dirname, '../CHANGELOG.md');
const changelogStream = fs.createWriteStream(outputPath);

conventionalChangelog({
    preset: 'angular',
    releaseCount: 0,
}, null, null, null, {
    headerPartial: '## 🎉 Hydroview v{{version}}\n\n_Release date: {{date}}_\n',
    transform: (commit, context) => {
        const typeMap = {
            feat: '✨ Features',
            chore: '🔧 Chores',
        };

        const newType = typeMap[commit.type];
        if (!newType) return;

        return { ...commit, type: newType };
    },
    groupBy: 'type',
    commitGroupsSort: (a, b) => {
        const order = ['✨ Features', '🔧 Chores'];
        return order.indexOf(a.title) - order.indexOf(b.title);
    },
})
    .pipe(changelogStream)
    .on('finish', () => {
        console.log('✅ CHANGELOG.md generated successfully!');
    });
