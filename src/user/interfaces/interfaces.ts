// Modelo que vamos a utilizar que contendra los atributos
export interface User {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly region: string;
    readonly createdAt: Date; 
}