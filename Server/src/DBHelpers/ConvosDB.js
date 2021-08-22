
const pg = require('pg')
const Constants = require('../Utils/Constants').Constants;

const pool = new pg.Pool(Constants.dbCred);


class ConvosDBHandler
{
    constructor(senderId,recieverId,message)
    {
        this.senderId = senderId;
        this.recieverId = recieverId;
        this.message = message;
        this.timestamp = this.generateTimestamp();
    }

    generateTimestamp()
    {
        const dt = new Date();
        
        const yyyy = dt.getFullYear().toString();
        const MM = pad(dt.getMonth() + 1,2);
        const dd = pad(dt.getDate(), 2);
        const HH = pad(dt.getHours(), 2);
        const mm = pad(dt.getMinutes(), 2)
        const ss = pad(dt.getSeconds(), 2)

        const dtString = yyyy + MM + dd + HH + mm + ss;
        return dtString;
    }

    static async createTable()
    {
        try
        {
            const tableName = Constants.tableName.convosdb;
            const query = "CREATE TABLE " + tableName + 
                "(senderId text NOT NULL, recieverId text NOT NULL,  message text NOT NULL, timestamp text NOT NULL)";
            await pool.query(query);
        }
        catch(e)
        {
            console.error(e);
        }
    }

    static async selectGetUserConvos(senderId)
    {
        try
        {
            const tableName = Constants.tableName.convosdb;
            let query = "SELECT * FROM " + tableName + " WHERE senderId='" + senderId + "' OR recieverId='" + senderId + "'";
            const res = await pool.query(query);
            return res;
        }
        catch(e)
        {
            console.error(e);
        }
    }

    static async selectGetRecievers(senderId)
    {
        try
        {
            const tableName = Constants.tableName.convosdb;
            let query = "SELECT DISTINCT recieverId FROM " + tableName + " WHERE senderId='" + senderId + "'";
            const res = await pool.query(query);
            return res;
        }
        catch(e)
        {
            console.error(e);
        }
    }

    static async selectByPair(senderId, recieverId)
    {
        try
        {
            const tableName = Constants.tableName.convosdb;

            let query = "SELECT * FROM " + tableName + " WHERE senderId='" + senderId + "' AND recieverId='" + recieverId + "'";
            const res = await pool.query(query);
            return res;
        }
        catch(e)
        {
            console.error(e);
        }
    }

    async insertRow()
    {
        try
        {
            const tableName = Constants.tableName.convosdb;

            let query = "INSERT INTO " + tableName +
                " VALUES ('"+this.senderId+"', '"+this.recieverId+"', '"+this.message+"', '"+this.timestamp+"')";
            pool.query(query);
        }
        catch(e)
        {
            console.error(e);
        }
    }
}

module.exports.ConvosDBHandler = ConvosDBHandler;
