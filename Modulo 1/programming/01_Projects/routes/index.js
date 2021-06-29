//Traemos el paquete
const { Router } = require('express')
const { dataValidator } =require('../middlewares/DataValidator')
const { user } = require('../lib/Esquemas/User')

//Inicializamos Router
const router = Router()

//Creacion de los endPoint
router
.get("/",dataValidator,(req,res)=>{
    res.send(req.pruebaDeMiMiddleware)
})
.get("/saludo",dataValidator("query",user),(req,res)=>{
    const { query } = req;
    res.json({
        saludo:`Hola soy ${query.nombre} ${query.apellido}` 
    })  
}).get('/saludo/:nombre',(req,res)=>{
    const { params } = req
    res.json({
        nombre:params.nombre
    })
})

//Exportamos las rutas
module.exports.RouterIndex = router
// module = {
//     exports:{
//         RouterIndex:router
//     }
// }