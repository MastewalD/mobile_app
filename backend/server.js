const express =require("express")
const mysql =require("mysql2")
const app=express()
const bodyparser=require("body-parser")


const cors=require("cors")

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password: "kidist123@mysql",
     database:"android_attendancedb"
})

app.use(cors(
    
))
app.use(express.json())

app.use(bodyparser.json({type:'application/json'}));
app.use(bodyparser.urlencoded({extended:true}))







app.post("/register",(req,res)=>{
    const { fullName,email}=req.body
    const sqlpost="INSERT INTO reg(  fullName,email)VALUES(?,?)"
    db.query(sqlpost,[fullName,email],(err,result)=>{

        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})



app.post('/login', (req, res) => {
  const { fullName} = req.body;
  db.query(`SELECT * FROM reg WHERE fullName='${fullName}'`, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Incorrect fullName');
    }
  });
});





app.get("/reg",(req,res)=>{
    const sqlGet="SELECT * FROM reg"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})

app.listen(8000,()=>{
    console.log("the server is running on port 8000")
})