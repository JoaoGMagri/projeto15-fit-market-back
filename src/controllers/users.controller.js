import { collectionUsers, collectionSessions } from "../database/database.js";

export async function postSingUp(req, res) {

    const objSingUP = req.objSingUP;

    try {

        await collectionUsers.insertOne(objSingUP);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function postSingIn(req, res) {

    const objSingIn = req.objSingIn;

    try {

        await collectionSessions.insertOne(objSingIn);
        res.send(objSingIn.token);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
export async function getUserInfo(req, res) {
    
    const userExists = req.userExists

    try {
        const InfoUser = await collectionUsers.findOne({ _id: userExists.userId });

        delete InfoUser._id;
        delete InfoUser.password;
        
        res.status(200).send(InfoUser);
    } catch (error) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
}
export async function deleteGoOut(req, res) {

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    try {
        await collectionSessions.deleteOne({ token: token });
        res.status(200).send({ message: "Token apagado com sucesso!" });
    } catch (error) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }


}
export async function putEditImg(req, res,) {

    const userExists = req.userExists
    const { img } = req.body

    try {
        await collectionUsers.updateOne({ _id: userExists.userId }, { $set: {img} })

        res.sendStatus(200)

    } catch (error) {
        res.send({ message: error.message });
    }

}
