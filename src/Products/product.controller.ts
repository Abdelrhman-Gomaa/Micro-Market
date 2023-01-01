import { Body, Controller, Get, Post, Param, Patch, Delete, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create.category.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ){}

    // Get All Category -----------------------
    @Get('cat')
    findAllCat(){
        return this.productService.findAllCat();
    }

    // Get One Category From DB By Search By IDs -----------------------
    @Get('cat/:id')
    findOneCatById(@Param('id') id:string){
        return this.productService.findOneCatById(id);
    }

    // Create new Category Seperated in DB -----------------------
    @Post('cat')
    @UseGuards(AuthGuard())
    createCat(@Body() createCategoryDto : CreateCategoryDto ){
        return this.productService.createCat(createCategoryDto);
    }

    // Update any specific One row from DB By searching By IDs
    @Patch('cat/:id')
    @UseGuards(AuthGuard())
    updateOneCat(@Param('id') id:string,@Body() updateCategoryDto: UpdateCategoryDto ){
        return this.productService.updateOneCat(id, updateCategoryDto);
    }

    // Deleting any One row from DB 
    @Delete('cat/:id')
    @UseGuards(AuthGuard())
    deleteOneCat(@Param('id') id:string){
        return this.productService.deleteOneCat(id)
    }

    // Get All Product
    @Get()
    findAll(){
        return this.productService.findAll();
    }

    // Get Some Attributes Like ('name','priceAfterSale') from Product Models
    @Get('limit')
    findAllNameAndPrice(){
        return this.productService.findAllNameAndPrice();
    }

    // Get One Product Row From DB By Search By IDs
    @Get(':id')
    findOneById(@Param('id') id:string){
        return this.productService.findOneById(id);
    }

    // Create new Product Row in DB
    @Post()
    @UseGuards(AuthGuard())
    create(@Body() createProductDto : CreateProductDto ){
        return this.productService.create(createProductDto);
    }

    // Update any specific One row from DB By searching By IDs
    @Patch(':id')
    @UseGuards(AuthGuard())
    updateOne(@Param('id') id:string,@Body() updateProductDto: UpdateProductDto ){
        return this.productService.updateOne(id, updateProductDto);
    }

    // Deleting any One row from DB 
    @Delete(':id')
    @UseGuards(AuthGuard())
    deleteOne(@Param('id') id:string){
        return this.productService.deleteOne(id)
    }

    // Deleting All rows from DB but Don't delete Table 
    @Delete()
    @UseGuards(AuthGuard())
    deleteAll(){
        return this.productService.deleteAll()
    }

}
