import express from 'express'; 
import routes from './routes/routeHandler';
const app = express();
const port = 3000;
const host = 'localhost';


// app.use('/api', routes);


// application/route level middleware
// const middleware = [cors,logger];
// app.use(middleware);

// // endpoint level middleware
// app.get('/api',middleware,(req,res)=>{
//     res.send("working");
// })

// custom middleware
// const myMiddleware = (req:express.Request, res:express.Response, next:Function) => {
//     // do stuff
//     next();
//   };



app.listen(port,host,()=>{
    console.log(`Server started at http://${host}:${port}`);
})