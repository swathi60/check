var express=require("express");
var cors=require("cors");
var mongoclient=require("mongodb").MongoClient;

var connectionstring="mongodb+srv://swathi:database1@cluster0.aguofmt.mongodb.net/shopping1?retryWrites=true&w=majority";
var PORT= process.env.PORT || 4005;
var app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/det",(req,res)=>{
    mongoclient.connect(connectionstring).then(clientObj=>{
        var database= clientObj.db("shopping1");
        database.collection("test1").find({}).toArray().then(result=>{
            res.send(result); res.end();
        })
    })
})


app.listen(PORT,()=>{console.log("server started at :"+ PORT);})