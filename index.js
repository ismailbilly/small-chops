const express = require('express');
const app = express();
const PORT =3000;
//inbuilt body parser
app.use(express.json()); 


app.get('/firdaus', (req, res)=>{
    res.send({
        message:'Hello Fidaus'
    })
})

app.post('/create', (req, res)=>{
   const data = req.body;
   console.log(data)
   if(data.firstname=='' || data.lastname=='' || data.email==''){
    res.send({
        message:'All fields are required'
    })
   }else{
    res.send({
        message:'created successfully'
    })
   }
})





app.listen(PORT, ()=>{
    console.log('server connected')
})