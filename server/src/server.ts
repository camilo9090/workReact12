import express from 'express'
import colors from 'colors'
import cors, { CorsOptions } from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec, { swaggerUiOptions } from './config/swagger'
import router from './router'
import db from './config/db'
import morgan from 'morgan'

// Conectar a base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log( colors.blue( 'Conexión exitosa a la BD'))
    } catch (error) {
        // console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar a la BD'))
    }
}
connectDB()

// Instancia de express
const server = express()

//Permitir conexiones

const conexion: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONT_END_URL) {
            callback(null,true)

        } else {
            callback(new Error('No permitido por CORS'))

        }
    }


}
server.use(cors(conexion))

// Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server