const argv = require('./config/yargs').argv.argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`se ha creado correctamente ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('no existe el comando ' + comando);
}