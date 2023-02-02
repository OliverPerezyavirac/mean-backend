// Datos que vamos a guardar en MongoDB
import { Schema } from "mongoose";

export const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    region: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})