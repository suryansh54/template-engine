var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var students = {
    1: 'Suryansh',
    2: 'Anita',
    3: 'Ravish'
}

app.get('/students/:id', (req, res) => {
    res.render('students', { name : students[req.params.id], id : req.params.id  })
})


app.listen(3000, () => {
    console.log("Open port http://localhost:3000/students/3");
});