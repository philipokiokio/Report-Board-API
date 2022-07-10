const dbConfig= {
    synchronize:false

  }


  switch (process.env.NODE_ENV){
      case 'development':
        console.log(process.env.NODE_ENV)

        Object.assign(dbConfig,{
            type:'postgres',
            host:`${process.env.DB_HOSTNAME}`,
            port:parseInt(`${process.env.DB_PORT}`),
            username: `${process.env.DB_USERNAME}`,
            password:`${process.env.DB_PASSWORD}`,
            database: `${process.env.DB_NAME}`,
            entities: ['**/*.entity.js']
            
        });
        console.log(dbConfig)
        break;
      case 'test':
        Object.assign(dbConfig,{
            type:'postgres',
            host:`${process.env.DB_HOSTNAME}`,
            port:parseInt(`${process.env.DB_PORT}`),
            username: `${process.env.DB_USERNAME}`,
            password:`${process.env.DB_PASSWORD}`,
            database: `${process.env.DB_NAME}`,
            entities: ['**/*.entity.js']
            
        });
        break;
      case 'production':
        break;

      default:
          throw new Error('Unknown Environment')

  }

  module.exports = dbConfig