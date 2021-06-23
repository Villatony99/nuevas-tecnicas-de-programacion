const express =require('express');
//generar aplicacion express
const app = express()
//EndPoint
app.get('/', (req,res)=>{
res.send("Hola Mundo con ExpressJs")
})
app.listen(3000,()=>{
    console.log("Servidor escuchando http://localhost:3000")
})