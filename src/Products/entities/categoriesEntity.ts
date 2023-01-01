import { 
    Table, 
    Column, 
    Model, 
    PrimaryKey, 
    AutoIncrement, 
    HasMany,
    DataType,
    Unique
} from 'sequelize-typescript';
import { Product } from './productEntity';

@Table
export class Category extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
    
    @Unique
    @Column(DataType.STRING)
    name: string;

    @HasMany(() => Product,{})
    products: Product[]
}