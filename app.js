
const express = require("express");

const app = express();
app.use(express.static(`${__dirname}/public`))
app.get("/", function(request, response){
     
    response.sendFile(__dirname + "/index.html");
});
app.listen(3000);
console.log("Сервер поднят")