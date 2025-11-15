import express from 'express';
const app = express()
app.get("/" , (req,res)=>{
    res.status(200).json({msg:"Success from backend"})

})
app.listen(3000,()=>console.log("server is running on 3000")
);