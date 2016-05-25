import config from '../config/environment';
import {dbApp,dbLog} from '../config/db/dbmongo';
import {dbelasticsearch} from '../config/db/dbelestris';
import dbredis from '../config/db/dbredis';
import dbMysql from '../config/db/dbmysql';

const mongoApp = dbApp(config),
      mongoLog = dbLog(config),
      elastic = dbelasticsearch(config),
      redis  = dbredis(config),
      mysqlSms = dbMysql(config);
      
export {
  mongoApp,
  mongoLog,
  elastic,
  redis,
  mysqlSms
};