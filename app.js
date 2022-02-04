const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT ||8000
app.use(express.static(__dirname + '/public'));
// const template_path = path.join(__dirname,"../views");
http.listen(PORT,()=>{
    console.log(`Listening  on port ${PORT}` );

}
)

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html');
})