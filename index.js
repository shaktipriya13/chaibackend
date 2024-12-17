require('dotenv').config()
// console.log("chai aur code");

// to run js file write node index.js in terminal
// below Codes copied fromthe the express js website
const express = require('express') //isko likhne se express ke sari dependencies comes inside the node modules fldr
// import express from "express"
const app = express() //app is called factory fxn
const port = 4000
//there are approx 65000 virtual ports

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('hoteshdotcom')
})
app.get('/login',(req,res)=>{
  res.send('<h1>please login at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h2>Chai aur Code!</h2>')
})
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${port}`);
})
// on updating code, restart ur server by ending currnt server by pressing ctrl+c.this is called hot reloading problem because we, so we can Install a package like nodemon.

//dotenv is a package to be installed using 'npm i dotenv' that helps to store senstitve info. privately so that it is not publicly available....after installing it create  a new file named .env 

// jo chize we can recreate using commands like node_modules flder , we don't need to push them into git. .so we create a gitignore file