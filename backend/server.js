

const express = require('express')
const app = express()
const port = 3000

//public
app.use(express.static('static'));
//app.use('/static', express.static(__dirname + '/static));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res) => res.render('index.ejs', {title:'Hi, please fill in the form!'}));




app.get('/error', (req, res) => res.status(404).render('index.ejs', {title:'Panieek'}));
app.get('/about', (req, res) => res.send('Over mij'))
app.get('/file', (req, res) => res.sendFile('/Users/inge/Documents/• HVA/JAAR 2/TECH/datingapp/static/images/banner6.jpg'))
app.get('/mp3', (req, res) => res.sendFile('/Users/inge/Documents/• HVA/JAAR 2/TECH/datingapp/static/images/mpvierrr.mp4'))
app.get('*', (req, res) => res.send('404 error not found'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



app.post(‘/add-movie', addMovie);
app.use(bodyParser.urlencoded({extended: true}))


function addMovie(req, res) {

  myMovies.push( {
      id: id;
      title: req.body.titile,
      password: req.body.password;
    } )
  }
  res.redirect(‘movie’/ + id);
}