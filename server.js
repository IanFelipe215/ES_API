import express from "express"
import mongoose from "mongoose"
import Movie from "./source/tables/movie.js"

// Instaciando o express
const app = express()

// Conectando o mongoDB Atlas
mongoose.connect('mongodb+srv://IanFelipe:Heimerdinger69@iandb.fj1yb5m.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Conexão estabelecida'))
    .catch(() => console.log('deu ruim'))

app.use(express.json())


app.get('/movies', async (req, res) => {
    // fazer busca com o mongoose
    res.send(await Movie.find({}))

})

app.post('/movie', async(req,res)=>{
    // Cria uma instância no model Movie para adicionar na coleção
    const newMovie = new Movie(req.body)
    try {
        // caso o metódo POST tenha sucesso salva a nova instância de Movie na coleção com o .save()
        await newMovie.save()
        res.json(newMovie)
    } catch (error) {
        res.json(null)
        console.log('Deu ruim')
    }

})

app.delete('/deletemovie/:id', async (req, res) =>{
    const id = req.params.id

    // tenta realizar a busca e deleta o documento com o _id especificado, caso não consiga cai no catch
    try{
        // Pega o filme direto da url, encontra o _id dele e deleta esse _id
        const filme = await Movie.find({title:id})
        const filme_id = filme[0]._id
        await Movie.findOneAndDelete({_id:filme_id})

        if (filme){
            res.send(await Movie.find({}))
        }
    } catch(error){
        res.send('Erro'+error)
    }
})

// app.put('/atualizar', (req,res) =>{
    
// })

// app.patch('/atualizarAll', (req,res) =>{

// })

// Escuta na porta 3000
app.listen(3000, () => {
})