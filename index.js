import express from 'express';
import bodyParser from 'body-parser';   // It is used to take incoming post requests bodies

import userRoutes from './routes/users.js';

const app = express();  // Whole application lies in this little variable app
const PORT = 8000;
app.use(bodyParser.json()); // We are going to use the json data in our whole application, json (javascript object notation) is a data format used to retrive and sent data through the rest APIs

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send("hey there");
})



app.listen(PORT, ()=> console.log(`Server running on port : http://localhost${PORT}.`));    // make sure you use template string rather than using normal inverted coma
