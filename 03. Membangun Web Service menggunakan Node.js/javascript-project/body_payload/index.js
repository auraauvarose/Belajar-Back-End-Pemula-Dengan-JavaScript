import express from 'express';
 
const app = express();
const port = 3000;
const host = 'localhost';
 
// Middleware untuk parsing JSON body
app.use(express.json());
 
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Welcome ${username}!`);
});
 
app.listen(port, () => {
    console.log('Server berjalan di http://${host}:3000');
});