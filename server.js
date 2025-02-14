const bcrypt = require("bcrypt")
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const jsonwebtoken = require("jsonwebtoken")
const sqlite3 = require("sqlite3")

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

const db = new sqlite3.Database("db.db")

app.post("/register", async (req, res) => {
    const { username, password } = req.body

    const hash = await bcrypt.hash(password, 8)
    db.get(`select * from user where name = ?`, [username], (err, row) => {
        if (row || err) {
            return res.status(409).json({ error: "Username already exists" })
        }
        db.run(`insert into user (name, password) values (?,?)`, [username, hash], function(err) {
            if (err) {
                return res.status(500).json({ error: err.message })
            }
            return res.status(201).json({ message: "User registered successfully" })
        })
    })
})

app.post ('/auth', async (req, res) => {
    const {username, password} = req.body

    db.get(`select * from user where name = ?`, [username], (err, row) => {
        if (!row || err || !bcrypt.compareSync(password, row.password)) {
            return res.status(409).json({ error: "Username doesn't exists" })
        }
        const token = jsonwebtoken.sign({id : row.id}, 'token', {expiresIn: '1h'})
        return res.status(201).json({token})
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})