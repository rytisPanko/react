
import { CityDto } from "../../../dto/city.dto"
import { City } from "../../../schemas/city.shema"
import { ObjectId } from "mongodb"

export async function DeleteCityService(city: CityDto): Promise<void> {
   await City.findOneAndDelete({_id: city._id})
   await City.updateOne(
   {_id: new ObjectId(city._id)},
{$set : {name: city.name, population : city.population}})

}