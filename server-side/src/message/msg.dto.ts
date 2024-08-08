import { IsNotEmpty, IsString } from "class-validator";

export class msgDto{
    @IsNotEmpty()
    @IsString()
    username:string

    @IsNotEmpty()
    @IsString()
    content:string;
}

// export type messagType = {
//     username:string
//     content:string
// }