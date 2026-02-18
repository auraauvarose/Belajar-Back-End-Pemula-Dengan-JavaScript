import express from "express";
const router = express.Router();

router.get("/", (_, res) => {
    res.send("Homepage");
});

router.get("/about", (_, res) => {
    res.send("About page");
});

// optional name parameter not supported in this express version
// so provide two separate routes instead
router.get("/hello/:name", (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);

//     router.get('/hello/:name?', (req, res) => {
//     const { name = 'stranger' } = req.params;
//     res.send(`Hello, ${name}!`);

});

router.get("/hello", (_, res) => {
    res.send("Hello, stranger!");
});

router.all("/", (_, res) => {
    res.status(405).send("Halaman tidak dapat diakses dengan method tersebut");
});

router.all("/about", (_, res) => {
    res.status(405).send("Halaman tidak dapat diakses dengan method tersebut");
});

router.use((_, res) => {
    res.send("Halaman tidak ditemukan");
});

export default router;

// curl -X GET http://localhost:3000/hello/dicoding
//  output: Hello, dicoding!
// curl -X GET http://localhost:3000/hello
//  output: Hello, stranger!