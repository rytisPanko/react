import type { NextApiRequest, NextApiResponse } from "next"
import connect from "../../../lib/mongoose"
import { GetCitiesService, PostCityService } from "../../../service/api/city"
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";



export default async function Cities(
    req: NextApiRequest,
    res: NextApiResponse
){

/*
const myPlaintextPassword = 'nesamone'

bcrypt.genSalt(Number(process.env.SALT_ROUNDS), function(err, salt){
    bcrypt.hash(myPlaintextPassword, salt, function(err,hash){
        console.log(hash)
    });
}); */

/* 

$2a$10$5xFrPxapZVoaxEJIaz7aZeb2o1IHKybKQiXlAk/1hY/XHUACBPMbm
*/



/* const session = await getServerSession(req,res, authOptions)
if (!session) return res.status(401).json({error: "Reikia prisijungti"}) */

    await connect()
switch (req.method) {
    case "POST": {
        await PostCityService(req.body)
        break
    }
}





    const cities = await GetCitiesService()
    res.json(cities)
};

