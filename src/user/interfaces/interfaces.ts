// Modelo que vamos a utilizar que contendra los atributos
import { Document } from "mongoose";

export interface User extends Document{
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly region: string;
    readonly createdAt: Date; 
}