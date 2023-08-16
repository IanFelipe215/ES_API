import Serie from "../tables/series.js"

class SerieController{
    async get(req,res){
        res.send(await Serie.find({}))
    }

    async post(req,res){
        // Cria uma instância no model Movie para adicionar na coleção
        const newSerie = new Serie(req.body)
        try {
            // caso o metódo POST tenha sucesso salva a nova instância de Movie na coleção com o .save()
            await newSerie.save()
            res.json(newSerie)
        } catch (error) {
            res.json(null)
            console.log('Deu ruim')
        }
    
    }

    async del(req, res){
        const id = req.params.id
    
        // tenta realizar a busca e deleta o documento com o _id especificado, caso não consiga cai no catch
        try{
            // Pega a serie direto da url, encontra o _id dela e deleta esse _id
            const serie = await Serie.find({title:id})
            const serie_id = serie[0]._id
            await Serie.findOneAndDelete({_id:serie_id})
    
            // Retorna as series que ainda existem
            if (serie){
                res.send(await Serie.find({}))
            }
        } catch(error){
            res.send('Erro'+error)
        }
    }

    async put(req,res){  
        const id = req.params.id
    
        const response = req.body
    
        try{
            const update = await Serie.updateOne({title:id},{$set:{title:response.title,author:response.author,seasons:response.seasons,episodes:response.episodes}})
            if (update.modifiedCount > 0){
                res.status(200).json({message:'Serie alterada com sucesso'})
            } else{
                res.status(404).json({message:'Serie não encontrada'})
            }
        }catch (error) {
            res.status(500)
        }
    }

    async patch(req,res){
        const id = req.params.id
    
        const response = req.body
    
        try{
            // Encontra a serie pelo title e altera os campos modificados. O $set representa o conjunto de campos que seram alterados
            await Serie.updateOne({title:id},{$set:response})
            if (response){
                res.status(200).json({message:'Serie alterada com sucesso'})
            } else{
                res.status(404).json({message:'Serie não encontrada'})
            }
        } catch (error) {
            res.status(500)
        }
    }
}

export default new SerieController