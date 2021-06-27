const express =require('express');

//generar aplicacion express
const app = express()

//Routes
// const {RouterIndex}=require('./routes/index.js')
// app.use("/",RouterIndex)
// app.use("/user",RouterIndex)
// app.use("/user/data",RouterIndex)
// app.use(RouterIndex)
// app.use(" ",RouterIndex)

/*
    Tarea N4
*/
const {RouterIndex}=require('./routes/indexDeber.js')
app.use("/", RouterIndex);
app.use("/deber-video", RouterIndex);

app.listen(3000,()=>{
    console.log("Servidor escuchando http://localhost:3000")
})