const { static } = require('express');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 52345;
console.log(`Happy Coding !`)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});

// --------------------- en Main Start --------------------- //
app.use(express.static('templates'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/templates/main.html') // Main Page Connection - en
});
// ---------------------- en Main End ---------------------- //

// --------------------- en Mmmber Start --------------------- //
app.use(express.static('templates'));

app.get('/member', function(req, res) {
    res.sendFile(__dirname + '/templates/member.html') // Member Page Connection - en
});
// ---------------------- en Mmmber End ---------------------- //

// --------------------- en Research Start --------------------- //
app.use(express.static('templates'));

app.get('/research', function(req, res) {
    res.sendFile(__dirname + '/templates/research.html') // Research Page Connection - en
});
// ---------------------- en Research End ---------------------- //

// --------------------- en Write-up Start --------------------- //
app.use(express.static('templates'));

app.get('/writeup', function(req, res) {
    res.sendFile(__dirname + '/templates/writeup.html') // Write-up Page Connection - en
});
// ---------------------- en Write-up End ---------------------- //

// --------------------- en Contact Start --------------------- //
app.use(express.static('templates'));

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/templates/contact.html') // Contact Page Connection - en
});
// ---------------------- en Contact End ---------------------- //