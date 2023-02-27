export * from './models'
export * from './repositories'
export * from './services'
export * from './keys'

//export * from './application'
//import {ApplicationConfig, VntixCmsApplication} from './application'

//export async function main(config: ApplicationConfig) {
//const app = new VntixCmsApplication(config)
//await app.boot()
//await app.start()
//return app
//}

//if (require.main === module) {
//// Run the application
//const config = {
//rest: {
//port: +(process.env.PORT ?? 3006),
//host: process.env.HOST ?? 'localhost',
//openApiSpec: {
//// useful when used with OpenAPI-to-GraphQL to locate your application
//setServersFromRequest: true,
//},
//},
//}
//main(config).catch(err => {
//console.error('Cannot start the application.', err)
//process.exit(1)
//})
//}
