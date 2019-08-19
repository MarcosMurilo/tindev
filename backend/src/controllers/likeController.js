const dev = require('../model/dev');

module.exports = {

   // obrigatório usar async pq foi usando await em 'const loggedDev = await dev.findById()'  
   async store(req, res){
        // pegando um paramentro através da 'rota'
        //console.log(req.params.devId); só testar resultado
        //console.log(req.headers.user); só testar resultado
        
        const {user}  = req.headers;
        const {devId} = req.params;
       
        //buscar usuario logado
        const loggedDev = await dev.findById(user);
        // usuario que esta recebendo o like
        const targetDev = await dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ erro: 'Dev não existente!'});
        }

        // se um usuario ja deu MATCH um no outro
        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('DEU MATCH');
        }
        // adicionando o like no dev
        loggedDev.likes.push(targetDev._id);

        // sempre que fizer uma alteração , metodo push por exemplo colocar o "SALVAR" a baixo
        await loggedDev.save();
 
        return res.json(loggedDev);
    }
};