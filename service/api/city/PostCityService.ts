import {City, ICity } from "../../../schemas/city.shema"

 export async function PostCityService(city: ICity): Promise<void> {
    await City.create(city)

 }
 