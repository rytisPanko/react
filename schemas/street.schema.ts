import { Schema, model, models, Model, Document } from "mongoose"

export interface IStreet extends Document {
    _id : string
    name: string
   
}


const StreetSchema = new Schema<IStreet>({
    name: {
        type: String,
       
    }
  
})




export const Street: Model<IStreet, {},{},{}, any> =
models.streets || model<IStreet>("streets" , StreetSchema)