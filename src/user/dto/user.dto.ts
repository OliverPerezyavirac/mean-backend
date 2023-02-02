//Definimos que datos vamos a enviar desde el cliente y el sevidor

export class CreateUserDTO{
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly region: string;
    readonly createdAt: Date; 
}