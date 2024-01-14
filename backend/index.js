const express = require('express')
const path = require('path');
const fs = require('fs');
const app = express()
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../frontend/websitestoryboard/build')))
app.use('/static', express.static(path.join(__dirname, '../frontend/websitestoryboard/public')))
app.use('/images', express.static(path.join(__dirname, './temp/images')))

app.get('/generate', (req, res) => {
    generate(() => {res.sendStatus(200)}, () => {res.sendStatus(500)});
})

app.get('/flashcards', (req, res) => {
    res.json(openText(path.join(__dirname, './temp')));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function generate(onGood, onBad) {
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./generate.py"]);
    let send = false;
    pythonProcess.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
    pythonProcess.stderr.on('data', (data) => {
        if (send) return;
        console.log(`${data}`);
        onBad();
        send = true;
    })
    pythonProcess.on('exit', () => {
        if (send) return;
        onGood();
    })
}

function openText(folderLocation) {
    // get file location & specifics
    const fileName = 'flashcards.txt';
    const filePath = path.join(folderLocation,fileName);

    // read file data

    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    let response = [];
    for (let j = 0; j < lines.length - 2; j+=3)
    {
        // extract data and append it to an array

        response.push({
            "Question": lines[j],
            "Answer": lines[j+1],
            "id": (j)/ 3
        });      
    }
    // print statement to check
    console.log(data);
    
    // return as a .json
    return response;
}