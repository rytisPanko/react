import { CityDto } from "../../../dto/city.dto";
import { City } from "../../../schemas/city.shema";

export async function PutCityService(city: CityDto): Promise<void> {
   await City.updateOne(
{_id: new Object(city._id)},
{$set: {name:city.name, population: city.population}}
   )
}