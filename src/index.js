//Import de bibliotecas
import express from 'express';
import cors from 'cors';
import joi from 'joi'
import { collectionProducts } from "../database/database.js";
import usersRouters from "./routers/users.routers.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRouters);

export const validateUsers = joi.object({
    name: joi.string().min(3).max(30).required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: joi.ref('password'),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server running in port: 5000")
});

app.get("/products", async (req, res) => {

    try {
        const products = await collectionProducts.find().toArray()
        res.send(products);
    } catch (error) {
        res.send(error);
    }

})