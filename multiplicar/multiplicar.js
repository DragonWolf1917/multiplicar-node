const fs = require('fs');

// let crearArchivo = async(base) => {
//     let contenido = '';

//     for (let i = 1; i <= 10; i++) {
//         contenido += `${base} x ${i} = ${base * i}\n`;
//     }

//     const data = new Uint8Array(Buffer.from(contenido));
//     fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
//         if (err) throw new Error(err);
//         else {
//             return `tabla-${base}.txt`;
//         }
//     });
// }

/*
    El método anterior no funciona puesto que hay un callback dentro de la promesa que no devuelve
    una promesa, por lo tanto a la hora de querer llamar el nombre del archivo devuelve "undefined".
    La solución a esto es construir nuestra propia promesa que, dentro del callback, haga un llamado
    a resolve/reject manualmente.
*/

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            return reject('la base debe ser un número');
        } else {
            let contenido = '';

            for (i = 1; i <= limite; i++) {
                contenido += `${base} x ${i} = ${base * i}\n`;
            }

            const data = new Uint8Array(Buffer.from(contenido));
            fs.writeFile(`./tablas/tabla-${base}.txt`, data, err => {
                if (err) reject(err);
                else resolve(`tabla-${base}.txt`);
            });
        }
    });
}
let listarTabla = (base, limite) => {
    let data = "";
    for (let i = 0; i <= limite; i++) {
        data += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(data);
}
module.exports = {
    crearArchivo,
    listarTabla
}