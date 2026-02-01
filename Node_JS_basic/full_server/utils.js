import fs from 'fs';

export default function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            const studentLines = lines.slice(1).filter((line) => line.length > 0);
            const fields = {};

            studentLines.forEach((line) => {
                const [firstname, , , field] = line.split(',');
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            resolve(fields);
        });
    });
}
