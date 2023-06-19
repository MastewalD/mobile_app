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
     database:"fingerprint_attendacedb"
})

app.use(cors(
    
))
app.use(express.json())

app.use(bodyparser.json({type:'application/json'}));
app.use(bodyparser.urlencoded({extended:true}))









app.post("/register",(req,res)=>{
    const { full_name,email}=req.body
    const sqlpost="INSERT INTO registration(  full_name,email)VALUES(?,?)"
    db.query(sqlpost,[full_name,email],(err,result)=>{

        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.post("/date",(req,res)=>{
  const { full_name}=req.body
  const date = new Date();

  

const hour = date.getHours() % 12 || 12;
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');
const period = date.getHours() >= 12 ? 'PM' : 'AM';

const time_in = `${hour}:${minutes}:${seconds} ${period}`
  const sqlpost="INSERT INTO login(  full_name,date,time_in)VALUES(?,?,?)"
  db.query(sqlpost,[full_name,date,time_in],(err,result)=>{

      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })
})

app.post("/permission",(req,res)=>{
  const {  full_name, reason, starting_date, ending_date}=req.body
  const sqlpost="INSERT INTO registration(  full_name, reason, starting_date, ending_date)VALUES(?,?,?,?)"
  db.query(sqlpost,[full_name, reason, starting_date, ending_date],(err,result)=>{

      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })
})


app.post('/login', (req, res) => {
  const { full_name} = req.body;
  
  if (!full_name) {
    return res.status(400).json({ message: 'Invalid input' });
  }
  db.query(`SELECT * FROM registration WHERE full_name='${full_name}'`, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      
      role=results[0].role
      const token = jwt.sign({ full_name,role}, 'your-secret-key');
      res.json({ token });
      
    } else {
      res.status(401).send('Incorrect full_name');
    }
  });
});



app.post('/fingerprint', async (req, res) => {
  const { fingerprintId } = req.body;
  const { userId } = req.session;

  const [result, fields] = await connection.execute('INSERT INTO fingerprint (user_id, fingerprint_id) VALUES (?, ?)', [userId, fingerprintId]);

  res.json({ success: true });
});
app.post("/team",(req,res)=>{
  const { team_name,team_role}=req.body
  const sqlpost="INSERT INTO team(team_name,team_role)VALUES(?,?)"
  db.query(sqlpost,[team_name,team_role],(err,result)=>{

      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })
})
app.get("/team",(req,res)=>{
    const sqlGet="SELECT * FROM team"
    db.query(sqlGet,(err,result)=>{
        res.json(result)
    })
})

app.get("/count_employee",(req,res)=>{
  const sqlGet="SELECT COUNT(DISTINCT registrationID)Total_No_of_user FROM registration;"
  db.query(sqlGet,(err,result)=>{
      res.json(result)
  })
})
app.get("/total_no_presents",(req,res)=>{
  const sqlGet="SELECT COUNT(DISTINCT registrationID)total_no_users_on_work FROM login WHERE DATE (date) = CURDATE();"
  db.query(sqlGet,(err,result)=>{
      res.json(result)
  })
})
app.get("/total_present_employee",(req,res)=>{
  const sqlGet="SELECT distinct  full_name total_no_users_on_work FROM login WHERE DATE (date) = CURDATE();"
  db.query(sqlGet,(err,result)=>{
      res.json(result)
  })
})



app.post('/logout', (req, res) => {
  const { full_name}=req.body
  const date = new Date();

  

const hour = date.getHours() % 12 || 12;
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');
const period = date.getHours() >= 12 ? 'PM' : 'AM';

const time_out = `${hour}:${minutes}:${seconds} ${period}`
  const sqlpost="INSERT INTO logout(  full_name,date,time_out)VALUES(?,?,?)"
  db.query(sqlpost,[full_name,date,time_out],(err,result)=>{

      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })
});

app.listen(8000,()=>{
    console.log("the server is running on port 8000")
})