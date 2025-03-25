const fs = require('fs');
const path = require('path');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const XLSX = require('xlsx');
const csv = require('csv-parser');

async function createChartImage(filePath) {
    // Read and parse the file
    const data = await parseDataFile(filePath);

    // Generate chart
    const chartImagePath = await generateChart(data, path.basename(filePath));

    return chartImagePath;
}

async function parseDataFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    if (ext === '.csv') {
        return await parseCSV(filePath);
    } else if (ext === '.xlsx') {
        return parseExcel(filePath);
    } else {
        throw new Error('Unsupported file format');
    }
}

function parseExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}

function parseCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', reject);
    });
}

async function generateChart(data, filename) {
    if (!data || data.length === 0) {
        throw new Error('No data available to generate chart');
    }

    // Get all keys (assuming first row has all columns)
    const keys = Object.keys(data[0]);
    const labels = data.map(row => row[keys[0]]);
    const datasets = keys.slice(1).map((key, i) => ({
        label: key,
        data: data.map(row => parseFloat(row[key]) || 0),
        backgroundColor: getRandomColor(),
        borderColor: getRandomColor(),
        borderWidth: 1
    }));

    const width = 800;
    const height = 600;
    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

    const configuration = {
        type: 'bar',
        data: {
            labels,
            datasets
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Data Analysis'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);
    const outputPath = path.join(__dirname, '../uploads/charts', `${Date.now()}-${filename.replace(/\.[^/.]+$/, '')}.png`);

    // Ensure directory exists
    if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }

    fs.writeFileSync(outputPath, image);
    return outputPath;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports = { createChartImage };