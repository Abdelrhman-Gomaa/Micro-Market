import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create.category.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Category } from './entities/categoriesEntity';
import { Product } from './entities/productEntity';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCTS_REPOSITORY')
        private productsRepository: typeof Product,
        @Inject('CATEGORIES_REPOSITORY')
        private categoriesRepository: typeof Category,
    ){}

    // Get All
    async findAll() {
        let result = await this.productsRepository.findAll({include: {all: true}});
        console.log(`result of Featch Function is: ${result}`);
        return result;
    }

    // Get Some Attributes Like ('name','priceAfterSale')
    async findAllNameAndPrice() {
        let result = await this.productsRepository.findAll({attributes: ['name','priceAfterSale']});
        console.log(`result of findAllNameAndPrice Function is: ${result}`);
        return result;
    }

    // Get One Row From DB By Search By IDs
    async findOneById(id: string) {
        let result = await this.productsRepository.findByPk(id,{include: {all: true}});
        if(!result){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of findOneById Function is:  ${result}`);
        return result;
    }

    // Create new Row in DB
    async create(createProductDto : CreateProductDto) {
        
        const category = await this.preloadCategoryByName(createProductDto.catogery);
        
        createProductDto.categoryId = category.id

        let result = await this.productsRepository.create<Product>({
            ...createProductDto,
            category
        })
        let {...readresult} = result
        console.log(`result of create Function is: ${readresult}`);
        return result;
    }

    // Update any specific One row from DB By searching By IDs
    async updateOne(id: string,updateProductDto: UpdateProductDto){
        let result = await this.productsRepository.update(
            {...updateProductDto},
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
        let result = await this.productsRepository.destroy(
            {where: {id: id} }
        )
        if(!result){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of deleteOne Function is: ${result}`);
        return result;
    }

    // Deleting All rows from DB but Don't delete Table 
    async deleteAll(){
        let result = await this.productsRepository.destroy(
            {truncate: true }
        )
        console.log(`result of deleteOne Function is: ${result}`);
        return result;
    }

    private async preloadCategoryByName(name: string): Promise<Category> {
        const existingCategory = await this.categoriesRepository.findOne({where :{name: name}});
        if(existingCategory){
            return existingCategory
        }
        return this.categoriesRepository.create({ name });
    }

// ---------------------------------------------------------------------------------

    // Get All Category
    async findAllCat() {
        let result = await this.categoriesRepository.findAll({include: {all: true}});
        console.log(`result of Featch Function is: ${result}`);
        return result;
    }

    // Get One Category From DB By Search By IDs
    async findOneCatById(id: string) {
        let result = await this.categoriesRepository.findByPk(id,{include: {all: true}});
        if(!result){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of findOneById Function is:  ${result}`);
        return result;
    } 

    // Create new Category Row in DB
    async createCat(createCategoryDto : CreateCategoryDto) {

        let result = await this.categoriesRepository.create<Category>({
            ...createCategoryDto
        })
        console.log(`result of create Function is: ${result}`);
        return result;
    }

    // Update any specific One row from DB By searching By IDs
    async updateOneCat(id: string,updateCategoryDto: UpdateCategoryDto){
        let result = await this.categoriesRepository.update(
            {...updateCategoryDto},
            {where: {id: id} }
        )
        if(result = [0]){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of updateOne Function is: ${result}`);
        return result;
    }

    // Deleting any One row from DB 
    async deleteOneCat(id: string){
        let result = await this.categoriesRepository.destroy(
            {where: {id: id} }
        )
        if(!result){
            throw new NotFoundException(`Not Found ID #${id}`);
        }
        console.log(`result of deleteOne Function is: ${result}`);
        return result;
    }

}
