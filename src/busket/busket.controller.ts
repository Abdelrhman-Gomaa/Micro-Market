import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { BusketService } from './busket.service';
import { CreateBusketDto } from './dto/create.busket.dto';
import { UpdateBusketDto } from './dto/update.busket.dto';

@ApiTags('Busket Operations')
@UseGuards(AuthGuard())
@Controller('busket')
export class BusketController {
    constructor(
        private readonly busketService: BusketService
    ){}

    // Get All
    @Get()
    async findAll(){
        return await this.busketService.findAll();
    }
    
    // Get One Product Row From DB By Search By IDs
    @Get(':id')
    findOneById(@Param('id') id:string){
        return this.busketService.findOneById(id);
    }

    // Create new Product Row in DB
    @Post()
    create(@Body() createBusketDto : CreateBusketDto ){
        return this.busketService.create(createBusketDto);
    }

    // Update any specific One row from DB By searching By IDs
    @Patch(':id')
    updateOne(@Param('id') id:string,@Body() updateBusketDto: UpdateBusketDto ){
        return this.busketService.updateOne(id, updateBusketDto);
    }

    // Deleting any One row from DB 
    @Delete(':id')
    deleteOne(@Param('id') id:string){
        return this.busketService.deleteOne(id)
    }
}
