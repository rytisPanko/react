import { StreetDto } from "../../../dto/street.dto"
import { Street } from  "../../../schemas/street.schema"

export async function GetAllStreetsService(): Promise<StreetDto[]> {
    const streets = await Street.find({})
    return streets
}
