const express = require('express')
const path = require('path');
const fs = require('fs');
const app = express()
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../frontend/websitestoryboard/build')))
app.use('/static', express.static(path.join(__dirname, '../frontend/websitestoryboard/public')))

app.get('/flashcards', (req, res) => {
    res.send('Hello Flashcards!')
})

app.get('/comics', (req, res) => {
    res.send('Hello Comics!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function getFlashcards() {
    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["path/to/script.py"]);
}


function openText(folderLocation) {
    // iterate over each file in images
    const files = fs.readdirSync(folderLocation);
    
    for (let i = 0; i < files.length; i++)
    {
        // get file location & specifics
        const fileName = files[i];
        const filePath = path.join(folderLocation,fileName);
    
        // read file data
    
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n').length;
        for (let j = 0; j < lines; j++ )
        {
            if (j % 2 === 0)
            {
                // even, questions
            }

            else
            {
                // odd, answers
            }

                    
        }
        // print statement to check
        console.log(data);
    
        // extract data and append it to an array
    }


}