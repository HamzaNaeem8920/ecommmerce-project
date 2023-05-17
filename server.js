import  express from 'express'
import dotenv, { config } from 'dotenv'
import morgan from 'morgan';
import { connectDB } from './config/db.js';


dotenv.config();

// rest object 
const app = express();

// database config

connectDB(); 

// middleware

app.use(express.json())
app.use(morgan('dev'))

// rest api 
app.get('/',(request, response) => {
response.send({
    message: ' Welcome to app '
});
});

// port 
const PORT =process.env.PORT

// run listen 
app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`);
})