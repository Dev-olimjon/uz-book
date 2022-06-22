import { Pool } from "pg";
let url = process.env.DATABASE_URL

export default new Pool({
    connectionString:process.env.DATABASE_URL
})