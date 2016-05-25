import * as Sequelize from 'sequelize';
export default (config:any)=>{
    const sequelize:any = new Sequelize(
        config.mysql.database,
        config.mysql.user,
        config.mysql.password,
        {
            dialect: config.mysql.driver,
            logging: false,
            timezone: 'Asia/Ho_Chi_Minh',
            define: {
				timestamps: false
			}
        }
    );
    return sequelize;
}