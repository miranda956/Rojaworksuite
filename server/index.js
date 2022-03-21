const express =require('express');
const methodoverride =require('method-override');
const cors =require('cors');
const bodyparser=require("body-parser");
const path =require("path");
const winston =require("winston");
const expresswinston =require("express-winston");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const db=require('./models')


const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.text());
app.use(bodyparser.json());
app.use(cors());

app.use(methodoverride("_method"));
app.use(expresswinston.logger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colirize:true
        }),
        new winston.transports.File({
            filename:'logs/success.log'
        })
    ]
}));

app.use(expresswinston.errorLogger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colorize:true
        }),
        new winston.transports.File({
            filename:"logs/error.log"
        })
    ]
}));
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "WorkSuite API",
        description: "WorkSuite API Information",
        contact: {
          name: " Developer"
        },
        servers: ["http://localhost:5000"]
      }
    },
    apis: ['./routes/*.js','./controllers/*.js']
    
  };
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

db.sequelize.sync({force:true}).then(()=>{
   const port = process.env.PORT || 5000;
   app.listen(port,()=> 
    console.log(`Server running on port ${port} 🔥`)); 
}).catch((err)=>{
    console.log(err)
});