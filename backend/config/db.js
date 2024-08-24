import mongoose from "mongoose"

export const connectDB = async() =>{

    await mongoose.connect('mongodb+srv://anshshah:8401957967@cluster0.9cojusu.mongodb.net/food-delivery').then(()=>console.log("DB connected"));

}