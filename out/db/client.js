"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
let url = process.env.DATABASE_URL;
exports.default = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL
});
