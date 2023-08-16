import {Router} from "express"
import SerieController from "./controller/serieController.js"

const serieRoutes = Router()

serieRoutes.get('/series', SerieController.get)
serieRoutes.post('/serie', SerieController.post)
serieRoutes.delete('/deleteserie/:id', SerieController.del)
serieRoutes.put('/atualizarAllSerie/:id', SerieController.put)
serieRoutes.patch('/atualizarSerie/:id', SerieController.patch)

export default serieRoutes