const express = require('express');
const mongoose = require('mongoose')
const app = express();
const User = require('./models/user');

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

const dbUrl = "mongodb+srv://canteena:canteena123@cluster0.jmad6.mongodb.net/react-node?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
           useNewUrlParser:true,
           useUnifiedTopology: true, 
           useCreateIndex: true,
           useFindAndModify: false 
        });
        console.log("MongoDB tá conectado")
    
    } catch (error) {
        console.log(error)
    }
}

//conectando ao DB
connectDB();

app.post("/api/register", async (req, res) => {
    try {
        await User.create({
           name: req.body.userName,
           email: req.body.userEmail
        }); 
        res.json({
            message: "Usuário cadastrado"
        })
    
    } catch (error) {
        res.json({
            message: "Email já cadastrado"
        })
        
    }


    console.log( req.body );

    res.json({
        message: "Recebido"
    })

});

app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();

         res.json({
            users: users 
        })
    } catch (error) {
        console.log(error);
    }
    
});

const Port = 5000;

app.listen (Port, () => {
    console.log("Servidor usando a porta " + Port)
}) 