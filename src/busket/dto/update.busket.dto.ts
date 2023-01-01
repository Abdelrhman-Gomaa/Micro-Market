import { PartialType } from "@nestjs/swagger";
import {CreateBusketDto} from "./create.busket.dto";

export class UpdateBusketDto extends PartialType(CreateBusketDto){}