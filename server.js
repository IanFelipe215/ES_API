import express from "express"
import mongoose from "mongoose"
import movieRoutes from "./source/movieRoutes.js"
import serieRoutes from "./source/serieRoutes.js"

// Instanciando o express
const app = express()

// Conectando o mongoDB Atlas
mongoose.connect('mongodb+srv://IanFelipe:Heimerdinger69@iandb.fj1yb5m.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Conexão estabelecida'))
    .catch(() => console.log('deu ruim'))


app.use(express.json())
app.use(movieRoutes)
app.use(serieRoutes)

// Escuta na porta 3000
app.listen(3000)