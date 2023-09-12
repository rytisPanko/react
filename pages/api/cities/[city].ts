import type { NextApiRequest, NextApiResponse } from "next"
import connect from "../../../lib/mongoose"
import { DeleteCityService, GetCityService, PutCityService } from "../../../service/api/city"

export default async function City(req: NextApiRequest, res: NextApiResponse) {

    await connect()
    switch (req.method) { 
        case "GET": { 
            const cities = await GetCityService(req?.query?.city.toString())
            res.json(cities)
            break
        }
        case "PUT": {
            await PutCityService(req.body)
            break
        }
        
        case "DELETE": {
            await DeleteCityService(req.body)
        }
           
    }

    res.end() 
}