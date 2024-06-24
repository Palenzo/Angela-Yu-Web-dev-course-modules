import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/about",(req,res)=>{
    res.send("About Us");
});
app.get("/contact",(req,res)=>{
    res.send("Contact Us");
});


