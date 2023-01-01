import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusketDto } from './dto/create.busket.dto';
import { UpdateBusketDto } from './dto/update.busket.dto';
import { Busket } from './entities/busketEntity';

@Injectable()
export class BusketService {
    constructor(
        @Inject('BUSKET_REPOSITORY')
        private readonly busketRepository: typeof Busket
    ){}

    // Get All
    async findAll() {
        let result = await this.busketRepository.findAll();
        console.log(`result of Featch Function is: ${result}`);
        return result;
    }

    // Get One Row From DB By Search By IDs
    async findOneById(id: string) {
        let result = await this.busketRepository.findByPk(id,{include: {all: true}});
        if(!result){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of findOneById Function is:  ${result}`);
        return result;
    }

    // Create new Row in DB
    async create(createBusketDto : CreateBusketDto) {

        let result = await this.busketRepository.create<Busket>({
            ...createBusketDto
        })
        console.log(`result of create Function is: ${result}`);
        return result;
    }

    // Update any specific One row from DB By searching By IDs
    async updateOne(id: string,updateBusketDto: UpdateBusketDto){
        let result = await this.busketRepository.update(
            {...updateBusketDto},
            {where: {id: id} }
        )
        if(result = [0]){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of updateOne Function is: ${result}`);
        return result;
    }

    // Deleting any One row from DB 
    async deleteOne(id: string){
        let result = await this.busketRepository.destroy(
            {where: {id: id} }
        )
        if(!result){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of deleteOne Function is: ${result}`);
        return result;
    }

    
    
}
