import {Router} from "express" 
import Controller from "./controller/controller.js"

const routes = Router()

routes.get('/movies', Controller.get)
routes.post('/movie', Controller.post)
routes.delete('/deletemovie/:id', Controller.del)
routes.put('/atualizarAll/:id', Controller.put)
routes.patch('/atualizar/:id', Controller.patch)

export default routes