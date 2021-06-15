const http = require('http')
http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(`<h2> Welcome to Our Site</h2>`);
        res.end();
    }else if(req.url ==='/contact'){
        res.write(`<h3>Our contact details</h3> \n: </h2>phone No<h2>: <h5>05874773938</h5>\n <h2>cell No</h2>: <h5>033342435</h5>\n <h2>Email</h2>: <h5>amb@gmail.com</h5>`)
        res.end();
    }
}).listen(3000),console.log('server is running at 5000 port')

















