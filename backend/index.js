const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../frontend/websitestoryboard/build')))
app.use('/static', express.static(path.join(__dirname, '../frontend/websitestoryboard/public')))
app.use('/images', express.static(path.join(__dirname, 'images')))

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
    const pythonProcess = spawn('python',[path.join(__dirname, '../frontend/websitestoryboard/public')]);
}


function openCSV() {
    
    for (let i = 0; i < 5; i++) // temporary for loop conditions
    {
        // iterate over each file in images

        // extract data and append it to a loop

        // update counter for each for loop iteration

    // return array and count
    }
    


}