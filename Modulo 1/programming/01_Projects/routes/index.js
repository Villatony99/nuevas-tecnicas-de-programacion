//Traemos el paquete
const { Router } = require('express')

//Inicializamos Router
const router = Router()

//Creacion de los endPoint
router
.get("/",(req,res)=>{
    res.send("Hola Mundo soy anthony")
}).get("/",(req,res)=>{
    res.send("Hola Mundo soy anthony")
})
.get("/saludo",(req,res)=>{
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