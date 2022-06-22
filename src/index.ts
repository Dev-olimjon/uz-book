import express from "express";
import cors from "cors"
import uzbookRoutes from "./routes/uz-book.routes"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',uzbookRoutes)

app.listen(process.env.PORT || 9090,()=>{
    console.log('server has been started on port 9090 or env.port')
})