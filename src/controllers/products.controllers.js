import {collectionProducts, collectionCarts, collectionBuys} from "../database/database.js";
import { ObjectId } from "mongodb";

export async function getProducts( req, res ) {
    try {
        const products = await collectionProducts.find().toArray()
        res.send(products);
    } catch (error) {
        res.send(error);
    }
}
export async function postCarts( req, res ) {

    const { userId } = req.userExists;
    const {_id, img, name, Tabela_Nutri, preco, type} = req.body

    try {
        
        const obj = {

            userId : userId,
            productsId : _id,
            img, 
            name, 
            Tabela_Nutri, 
            preco, 
            type,
            
        }

        await collectionCarts.insertOne(obj)
        res.send("ok")

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function getCarts( req, res ) {

    const { userId } = req.userExists;

    try {
        
        const carts = await collectionCarts.find( {userId} ).toArray();
        res.status(200).send(carts);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function deleteCarts( req, res ) {

    const { _id } = req.headers;

    try {
        
        await collectionCarts.deleteOne( {_id: ObjectId(_id)} );
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function postBuys(req, res) {

    const { userId } = req.userExists;
    const { paymentMethod, tel, adress } = req.body
    try {

        const obj = {
            userId: userId,
            paymentMethod,
            tel,
            adress
        }
        await collectionCarts.deleteMany({ userId })
        await collectionBuys.insertOne(obj)
        res.send("ok")

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}