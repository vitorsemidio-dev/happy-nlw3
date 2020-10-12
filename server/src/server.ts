import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        happy: true,
    });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
});
