import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const today = new Date();
    const currentDay = today.getDay();
    let type ="a weekday";
    let adv = "It's time to go to work!";
    if (currentDay === 0 || currentDay === 6){
        type = "a weekend";
        adv = "It's time to relax!";
    }else{
        type = "a weekday";
        adv = "It's time to go to work!";
    }
    res.render("index.ejs",{
        dayType: type,
        advice: adv
    });
    })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);