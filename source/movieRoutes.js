import {Router} from "express" 
import MovieController from "./controller/movieController.js"

const movieRoutes = Router()

movieRoutes.get('/movies', MovieController.get)
movieRoutes.post('/movie', MovieController.post)
movieRoutes.delete('/deletemovie/:id', MovieController.del)
movieRoutes.put('/atualizarAllMovie/:id', MovieController.put)
movieRoutes.patch('/atualizarMovie/:id', MovieController.patch)



export default movieRoutes