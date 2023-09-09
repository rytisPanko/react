import type { NextApiRequest, NextApiResponse } from "next"
import connect from "../../../lib/mongoose"
import { GetCitiesService, PostCityService } from "../../../service/api/city"



export default async function Cities(
    req: NextApiRequest,
    res: NextApiResponse
){

    await connect()
switch (req.method) {
    case "POST": {
        await PostCityService(req.body)
        break
    }
}





    const cities = await GetCitiesService()
    res.json(cities)
}