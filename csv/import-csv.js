import { parse } from 'csv-parse';
import fs from 'node:fs';

const csvPath = new URL('./tasks.csv', import.meta.url);
const fileStream = fs.createReadStream(csvPath);

const csvParse = parse({
    delimiter: ',',
    skip_empty_lines: true,
    from_line: 2
});

async function csv() {
    const lines = fileStream.pipe(csvParse);

    for await (const line of lines) {
        const [title, description] = line;

        await fetch('http://localhost:3333/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        });
    }
}

csv();
