/* 
    Promesas
*/
function promesas(bandera) {
    return new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion resuelta");
            }, 3000)
        } else {
            setTimeout(() => {
                reject("La operacion fallo");
            }, 2000)
        }
    })
}
// promesas()
// .then((resultado)=>{
//     console.log("Respuesta positiva",resultado)
// })
// .catch((error)=>{
//     console.log("Error",error)
// })

var segundaPromesa = () => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion resuelta");
        }, 3000)
    } else {
        setTimeout(() => {
            reject("La operacion fallo");
        }, 2000)
    }
})
segundaPromesa(true)
    .then((respuesta) => {
        console.log(respuesta)
    })
    .catch((error) => {
        console.log(error)
    })

promesas(true)
    .then((respuesta) => {
        console.log(respuesta)
        return segundaPromesa(true)
    })
    .then((respuesta) => {
        console.log(respuesta)
    })
    .catch((error) => {
        console.log(error)

    })