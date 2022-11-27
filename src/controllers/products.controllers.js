import {collectionProducts} from "../database/database.js";

export async function getProducts(req,res) {
    try {
        const products = await collectionProducts.find().toArray()
        res.send(products);
    } catch (error) {
        res.send(error);
    }
}
export async function postCarts(req, res) {

    

}