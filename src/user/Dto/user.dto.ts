import { ApiProperty } from "@nestjs/swagger";

export class userDto {
    @ApiProperty({example:"John"})
    firstName:string;

    @ApiProperty({example:"Wick"})
    lastName:string;

    @ApiProperty({example:"johnwick@gmail.com"})
    email:string;

    @ApiProperty({example:"9987654321"})
    phoneNumber:string;
}