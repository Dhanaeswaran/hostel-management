const exp = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const cookieParser =  require('cookie-parser');
const app = exp();

app.use(exp.json());
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(cors({
    origin:"http://localhost:3001",
    methods: ["POST","GET"],
    credentials: true,
}));



const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "dhanaeswaran@2004",
    database: "hostel-management",
})

db.connect((err) => {
    if(err) console.log("hai" + err);
})



app.get('/logout',(req,res) => {
    req.session.cookie.expires = new Date(0);
    return res.json("done");
})

app.get('/',(req,res) => {
    if (req.session && req.session.rollno) {
        return res.json({ valid: true, roll: req.session.roll });
    } else {
        return res.json({ valid: false });
    }
})

app.post('/login',(req,res) => {
    const sql = "SELECT * FROM user WHERE rollno = ? AND password = ?";
    db.query(sql,[req.body.Rollno,req.body.password],(err,data) => {
        if(err) return res.json(err);
        if(data.length > 0) {
            req.session.rollno = data[0].rollno;
            req.session.name = data[0].name;
            return res.json(true);
        }
        else {
            return res.json(false);
        }
    })
})

app.post('/register',(req,res) => {
    const sql = "INSERT INTO user VALUES (?,?,?,?,?,?)";
    db.query(sql,[req.body.Rollno,req.body.name,req.body.password,req.body.branch,req.body.contact,req.body.email],(err,data) => {
        if(err) return res.json(err);
        if(data){ 
            req.session.rollno = req.body.Rollno;
            req.session.name = req.body.name;
            return res.json({valid: true});
        }
        else return res.json({valid:false});
    })
})


app.listen(8001)