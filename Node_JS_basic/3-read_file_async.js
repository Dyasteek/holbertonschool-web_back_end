const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            const studentLines = lines.slice(1).filter((line) => line.length > 0);

            let output = `Number of students: ${studentLines.length}\n`;
            console.log(`Number of students: ${studentLines.length}`);

            const fields = {};

            studentLines.forEach((line) => {
                const [firstname, lastname, age, field] = line.split(',');
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            for (const field in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, field)) {
                    const list = fields[field];
                    const line = `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
                    console.log(line);
                    output += line + '\n';
                }
            }
            resolve(output.trim()); // Return output for potential usage
        });
    });
}

module.exports = countStudents;
