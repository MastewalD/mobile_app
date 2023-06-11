const express =require("express")
const mysql =require("mysql2")
const jwt =require('jsonwebtoken')
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
    const { fullName,email,fingerPrint}=req.body
    const sqlpost="INSERT INTO reg(  fullName,email,fingerPrint)VALUES(?,?,?)"
    db.query(sqlpost,[fullName,email,fingerPrint],(err,result)=>{

        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})



app.post('/login', (req, res) => {
  const { fullName} = req.body;
  if (!fullName) {
    return res.status(400).json({ message: 'Invalid input' });
  }
  db.query(`SELECT * FROM reg WHERE fullName='${fullName}'`, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      
      const token = jwt.sign({ fullName: fullName }, 'your-secret-key');
      res.json({ access_token: token });
      
    } else {
      res.status(401).send('Incorrect fullName');
    }
  });
});


app.post("/team",(req,res)=>{
  const { TeamName,Role}=req.body
  const sqlpost="INSERT INTO team(TeamName,Role)VALUES(?,?)"
  db.query(sqlpost,[TeamName,Role],(err,result)=>{

      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })
})
app.get("/reg",(req,res)=>{
  const sqlGet="SELECT * FROM reg"
  db.query(sqlGet,(err,result)=>{
      res.json(result)
  })
})

app.get("/team",(req,res)=>{
    const sqlGet="SELECT * FROM team"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})



app.post('/fingerprint', (req, res) => {
  const fingerprintData = req.body;
  connection.query('INSERT INTO template SET ?', fingerprintData, (err, results, fields) => {
    if (err) {
      console.error('Error inserting fingerprint data', err);
      res.status(500).send('Error registering fingerprint');
      return;
    }

    console.log('Fingerprint data inserted successfully');
    res.status(200).send('Fingerprint registered successfully');
  });
})
app.post('/logout', (req, res) => {
  const access_token = req.body.access_token;

  res.status(200).send('Logged out successfully');
});

app.listen(8000,()=>{
    console.log("the server is running on port 8000")
})