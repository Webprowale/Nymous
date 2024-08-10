import { IsNotEmpty, IsString } from "class-validator";

export class UserDto{
    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    username:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    username:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}



export type logintype = {
    username: string,
    password: string,
}