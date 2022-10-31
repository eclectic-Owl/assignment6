const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1100;
    


let user = {
    username: "dogeCoin",
    password: "password1",
    email: "test@test.com",
    
    courses: {
        course: {
           classID: "CMSC2204",
           courseName: "mobile",
           startDate: "8/29/2021",
           endDate: "12/21/2021" 
        },
        course1: {
            classID: "CMSC2214",
            courseName: "C#",
            startDate: "8/29/2021",
            endDate: "12/21/2021" 
         },
         course2: {
            classID: "CMSC2201",
            courseName: "DB II",
            startDate: "8/29/2021",
            endDate: "12/21/2021" 
         }


}
    
    
}

app.get('/getUser',(req, res) =>{
    try {
        return res.status(200).json(user);
    }
    catch{
        return res.status(500);
    }});




app.post('/addUser',(req, res) =>{
    try {
        let courseVAR = req.body.object.user;

        console.log(courseVAR);
        return res.status(200).json("Added user username successfully");
    }
    catch{
        return res.status(500);
    }});

app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}`);
});