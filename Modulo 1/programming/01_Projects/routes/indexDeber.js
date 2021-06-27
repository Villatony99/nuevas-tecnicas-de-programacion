const { Router } = require('express')
const data = require('../data.json')

const router = Router()

var modifiedData = data.map((datos)=>{
    datos.first_name=datos.first_name.toLocaleUpperCase()
    datos.last_name=datos.last_name.toLocaleUpperCase()
    return datos
    })

router
.get("/",(req,res)=>{
    res.send("Tarea N4: Video - JS en el backend")
})

//Primer EndPoint
.get("/users",(req,res)=>{
    res.json({
        msg:"Lista de Usuarios",
        body:[modifiedData]
    })
})

//Segundo EndPoint
.get("/users-query",(req,res)=>{
    const { query: { id } } = req
    var filterData=data.filter((datos)=>datos.id==id)
    if(id>=1 && id<=10){
        res.json({
            msg:`Datos del usuario ${id}`,
            body:[filterData]
        })
        
    }else{
        res.json({
            msg:"Lista de Usuarios",
            body:[modifiedData]
        })
    }
})

//Tercer EndPoint
.get('/users-params/:apellido',(req,res)=>{
    const { params: {apellido} } = req
    var mayusDato= apellido.toLocaleUpperCase()
    var filterData=data.filter((datos)=>datos.last_name==mayusDato)
    var correoData = filterData.map((datos)=>{
        datos.email=datos.email
        return datos.email
        })
        if(correoData==false){
            res.json({
                msg:`El apellido ${mayusDato} no existe`,
                body:"null"            
    })
        }else{
        res.json({
            msg:`Correo del usuario ${mayusDato}`,
            body:correoData
        
})}
})



module.exports.RouterIndex = router