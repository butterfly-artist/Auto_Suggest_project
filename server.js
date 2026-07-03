const express=require('express');

const app=express();

const port=3002;

//web server:
app.use(express.static("frontend"));

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

app.listen(port, () => {
  console.log(`Sucessfully is running on http://localhost:${port}`);
});
