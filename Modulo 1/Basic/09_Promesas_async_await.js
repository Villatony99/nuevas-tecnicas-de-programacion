//async await
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
(async () => {
    try {
        var respuesta = await promesas(true)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
})()