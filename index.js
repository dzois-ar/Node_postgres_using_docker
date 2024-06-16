const express = require('express')
const app = express()

const { Pool } = require('pg')


var pool

// Database connection configuration
pool = new Pool({
    user: 'postgres',
    host: 'db',
    password: 'root'
})

const port = 8080

// body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Root endpoint to create 'users' table if it doesn't exist
app.get('/', async(req, res) => {
   
    await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255), age INT)')
   
    res.send('Success!')
})

// Endpoint to create 'qrcode' table if it doesn't exist
app.get('/qrcode', async(req, res) => {
     
    await pool.query('CREATE TABLE IF NOT EXISTS qrcode(Code SERIAL primary key, UserId INT,foreign key (UserId) references users(id),CreatedDateTime TIMESTAMP default current_timestamp,QrCode TEXT);')
    res.send('Success!')
})


// Endpoint to add a new user to the 'users' table
app.post('/users', async (req, res) => {
    const { name, age } = req.body
    const response = await pool.query('INSERT INTO users (name, age) VALUES ($1, $2)', [name, age])
    res.send("success")
})

// Endpoint to delete a user from the 'users' table by ID
app.post('/deleteUsers', async (req, res) => {
    const { id } = req.body
    const response = await pool.query('DELETE FROM users  WHERE id=$1', [id]);
    res.send("success")
})

// Endpoint to add a new QR code to the 'qrcode' table
app.post('/inQrCode', async (req, res) => {
    const { UserId, qrCode, } = req.body
    const response = await pool.query('INSERT INTO qrcode (UserId, QrCode) VALUES ($1, $2)', [UserId, qrCode])
    res.send("success")
})

// Endpoint to retrieve all users from the 'users' table
app.get('/getUsers', async (req, res) => {
    const response = await pool.query('SELECT * FROM users')
    res.send(response.rows)
})

// Endpoint to retrieve QR code information along with user details
app.get('/getQrcodeInfo', async (req, res) => {
    const response = await pool.query('SELECT q1.Code, q1.CreatedDateTime, q1.QrCode, users.name, users.age FROM qrcode q1 JOIN users ON users.id = q1.UserId ;')
    res.send(response.rows)
})


// Start the server and listen on the specified port
app.listen(port, '0.0.0.0')
console.log(`Running on http://0.0.0.0:${port}`)

