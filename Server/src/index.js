
const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/MernPosDB', {
		useNewUrlParser: true , 
		useUnifiedTopology: true
	})
	.then(() => console.log("Connected to MongoDB."))
	.catch(err => console.log("Error Connecting to MongoDB :: " , err));

var app = express();


//#region "Routing"

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

//#region "Route services"



//#endregion

//#endregion

//#region  "Open PORT : 4000"

const port = 4000;  // Take port number from Environment variable
app.listen(port, function() {
    console.log(`Listening to port ${port} ...`);
});

//#endregion