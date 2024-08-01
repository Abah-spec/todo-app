const express = require('express')
const cors = require(`cors`)
require('./config/dbConfig.js')
const appRouter = require(`./router/userRouter.js`)
const todoRouter = require(`./router/todoRouter.js`)
const port = process.env.port
require(`dotenv`).config()
const app = express();
app.use(express.json())
app.use(cors({origin:'*'}))

app.use('/api/v1/user', appRouter)
app.use('/api/v1/user', todoRouter)

app.listen(port, () => {
    console.log(`server running on PORT: ${port}`);
})