const express =require('express');
//generar aplicacion express
const app = express()
//EndPoint
app.get('/', (req,res)=>{
res.send("Hola Mundo soy anthony")
})

app.get('/saludo',(req,res)=>{
    req.query
    const {
        query: { nombre, apellido } } = req;

    res.json({
        saludo:`Hola tu eres ${nombre} ${apellido}` ,
    })
})

app.get('/saludo/:nombre',(req,res)=>{
    const { params : { nombre } } = req
    res.json({
        nombre:nombre
    })
})
app.listen(3000,()=>{
    console.log("Servidor escuchando http://localhost:3000")
})