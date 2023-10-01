const http = require('http');

const dataControler=(req,res)=>{
    res.write(
        '<h1>This Ankith Starting Nodejs</h1>'
    );
    res.end();
}

http.createServer(dataControler).listen(4000);