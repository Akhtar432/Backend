import express from 'express'
import cors from 'cors'; 


const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('server is ready');
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'Second joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title: 'Third joke',
            content: 'This is third joke'
        },
        {
            id:4,
            title: 'Fourth joke',
            content: 'This is fourth joke'
        },
        {
            id:5,
            title: 'Fifth joke',
            content: 'This is fifth joke'
        },
    ];
    res.send(jokes)
});

const port = process.env.PORT || 4000; 

app.listen(port, () =>  {
    console.log(`Server at http://localhost:${port}`);
});