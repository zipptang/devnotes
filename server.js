'use strict'

const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({
    defaultLayout: 'layout'
}))
app.set('view engine', 'handlebars')

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

// Set Port
app.set('port', (process.env.PORT || 3000 ))

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'))
})