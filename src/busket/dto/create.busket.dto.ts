import { Type } from "class-transformer";
import { IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateBusketDto {

    @IsString({each: true})
    readonly item: string[];

    @Type(() => Number)
    @IsNumberString({}, { each: true })
    readonly quantity: number[];

    @Type(() => Number)
    @IsNumberString({}, { each: true })
    readonly price: number[];

    @Type(() => Number)
    @IsNumberString({}, { each: true })
    readonly totalValue: number[];

    @IsNumber()
    readonly totalPrice: number;

    @IsNumber()
    readonly totalItems: number;

    @IsNumber()
    readonly cash:number;

    @IsNumber()
    readonly rest: number;

    @IsString()
    payMethod: string;

}