const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../frontend/websitestoryboard/build')))
app.use('/static', express.static(path.join(__dirname, '../frontend/websitestoryboard/public')))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})