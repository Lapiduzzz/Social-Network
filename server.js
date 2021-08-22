import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const productRouter = express.Router()

app.use('/products', productRouter);

app.get('/',(req, res) => {
    res.send('<h1>Главная страница<h1>');
});

app.get('/about',(req, res) => {
    res.send('<h1>Описание<h1>');
});

productRouter.get('/', (req, res) => {
    res.send('<h1>Продукты<h1>');
})

productRouter.get('/create', (req, res) => {
    res.send('<h1>Добавить новый продукт<h1>');
})

productRouter.get('/:id', (req, res) => {
    res.send(`<h1>Товар ${req.params.id}<h1>`);
})

app.get('/form',(req, res) => {
    res.sendFile(__dirname + '/ins.html')
});
app.listen(3000);