import { 
    Table,
    Column, 
    Model, 
    PrimaryKey, 
    AutoIncrement, 
    Default, 
    ForeignKey, 
    BelongsTo,
    Unique,
} from 'sequelize-typescript';
import { Category } from './categoriesEntity';

@Table
export class Product extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
    
    @Unique
    @Column
    name: string;

    @Column
    count: number;
    
    @Column
    Price: number;

    @Default(0)
    @Column
    sale: number;

    @Column
    priceAfterSale: number;

    @ForeignKey(() => Category)
    categoryId: number

    @BelongsTo(() => Category)
    catogery: Category;

}