const express=require("express");
const qr=require("qrcode");
const path=require("path");
const bodyparser=require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"view"));

app.get("/",(req,res)=>{
 res.render("index");
});

app.post("/scan",(req,res)=>{
 const image=req.body.txt;
 qr.toDataURL(image, (err, src) => {
  res.render("scan", { 
   img_source:src,
   });
 });
});

app.listen(process.env.PORT || 3000,function () {
 console.log("Server is running at port 3000");
});

