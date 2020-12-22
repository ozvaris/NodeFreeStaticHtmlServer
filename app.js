const express = require('express')
const app = express()
const port = 3040
var serveIndex = require('serve-index');

// app.get('/', (req, res) => {
//   res.send('<script >location.href = "index.html"</script>')
// })

app.use(express.static('public'))
//app.use(express.static('HTML'))


app.use(express.static(__dirname + "/"))
app.use('/public', serveIndex(__dirname + '/public'));
app.use('/html', serveIndex(__dirname + '/public/HTML'));
app.use('/porto_react', serveIndex(__dirname + '/public/porto_react'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})