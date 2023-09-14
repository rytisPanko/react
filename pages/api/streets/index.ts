import type { NextApiRequest, NextApiResponse } from "next"
import connect from "../../../lib/mongoose"
import { DeleteCityService, GetCityService, PutCityService } from "../../../service/api/city"
import { GetAllStreetsService } from "../../../service/api/city/GetAllStreetsService"

export default async function Streets(req: NextApiRequest, res: NextApiResponse) {

    await connect()
    switch (req.method) { 
        case "GET": { 
            const streets = await GetAllStreetsService()
            res.json(streets)
            break
        }
           
    }

    res.end() 
}

