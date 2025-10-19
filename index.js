require('dotenv').config()

const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express();

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send("Welcome to my backend");
});

app.get('/me', async(req, res) => {
    let catFact = '';

    try{
        const response = await axios.get('https://catfact.ninja/fact', {
            timeout: 7000
        });

        catFact = response.data.fact;
    } catch (error){
        console.error("Error fetching cat fact", error.message)
        catFact = "Could not retrieve cat fact at this time"
    }

    const currentTimestamp = new Date().toISOString();

    const userData = {
        email: process.env.EMAIL,
        name: process.env.NAME,
        stack: process.env.STACK
    }

    const responseBody = {
        status: 'success',
        user: userData,
        timestamp: currentTimestamp,
        fact: catFact
    }

    res.status(200).json(responseBody)
})

app.listen(PORT, () => {
    console.log(`Server is running on http/localhost:${PORT}`);
});