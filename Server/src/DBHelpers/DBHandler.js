
const pg = require('pg')

class DBHandler 
{
    constructor(dbName = "meanchatdb")
    {
        const dbCred = {
            user: 'postgres',
            host: 'localhost',
            password: 'pgAdmin',
            port: 5432
        };

        this.pool = new pg.Pool(dbCred);
        this.dbName = dbName;
    }

    async dropDatabase()
    {
        try
        {
            await this.pool.query("DROP DATABASE IF EXISTS "+ this.dbName +";");
        }
        catch(e)
        {
            console.error(e);
        }
    }

    async createDatabase()
    {
        try
        {
            await this.pool.query("CREATE DATABASE "+ this.dbName +";");
        }
        catch(e)
        {
            console.error(e);
        }
    }

}

module.exports.DBHandler = DBHandler;
