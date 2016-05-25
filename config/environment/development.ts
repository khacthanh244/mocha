const MONGO_ADDR = process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost',
      MONGO_PORT = process.env.MONGO_PORT_27017_TCP_PORT || 27017,
      ELASTIC_ADDR = process.env.ELASTIC_PORT_9200_TCP_ADDR || 'localhost',
      ELASTIC_PORT = process.env.ELASTIC_PORT_9200_TCP_PORT || 9200,
      REDIS_ADDR = process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1',
      REDIS_PORT = process.env.REDIS_PORT_6379_TCP_PORT || 6379;

export default {
    mongo: {
        app: {uri:`mongodb://${MONGO_ADDR}:${MONGO_PORT}/oc-vang-dev`},
        log:{uri:`mongodb://${MONGO_ADDR}:${MONGO_PORT}/oc-vang-log`}
    },
    mysql: {
        "driver": "mysql",
        "user": "root",
        "database": "sms",
        "password": "85CFd1b39382"
    },
    elastic: `${ELASTIC_ADDR}:${ELASTIC_PORT}`,
    redis:{
        "port":REDIS_PORT,
        "host":REDIS_ADDR
    }
    
};
