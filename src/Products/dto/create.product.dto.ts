import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    readonly name: string;

    @IsNumber()
    readonly count: number;

    @IsNumber()
    readonly Price: number;

    @IsNumber()
    readonly sale: number;

    @IsNumber()
    readonly priceAfterSale: number;

    @IsNumber()
    categoryId: number;

    @IsString({each: true})
    readonly catogery:string;

}