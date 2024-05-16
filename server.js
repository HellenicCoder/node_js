const http = require('http');
const getReq = require('./methods/get-request')
const putReq = require('./methods/put-request')
const deleteReq = require('./methods/delete-request')
const postReq = require('./methods/post-request')
let movies = require('./data/movies.json')

require('dotenv').config();

const PORT = process.env.PORT || 5001;

const sever = http.createServer((req , res) => {
    req.movies = movies
    switch(req.method){
    case "GET":
        getReq(req , res);
        break;
    case "PUT":
        putReq(req , res);
        break;
    case "DELETE":
        deleteReq(req , res);
        break;
    case "POST":
        postReq(req , res);
        break;
    default:
        res.statusCode = 200
        res.setHeader('content-Type', 'application/json')
        res.write(JSON.stringify({title: "Not Found",message: 'There is an error'}))
        res.end()
    }
})
sever.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
})
