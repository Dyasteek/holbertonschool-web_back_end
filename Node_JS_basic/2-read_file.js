const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\n');

        // Remove header
        const studentLines = lines.slice(1).filter((line) => line.length > 0);

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
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
