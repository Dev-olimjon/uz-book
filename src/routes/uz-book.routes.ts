import { Router } from "express";
const routes = Router()
routes.get('/get',(req,res)=>{
    res.send('test')
})
export default routes