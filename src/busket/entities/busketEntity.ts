import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Busket extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    // الكميه
    @Column(DataType.ARRAY(DataType.STRING))
    item: string[];

    // الكميه
    @Column(DataType.ARRAY(DataType.INTEGER))
    quantity: number[]; 

    // السعر
    @Column(DataType.ARRAY(DataType.INTEGER))
    price: number[]; 

    // القيمه او إجمالى سعر المنتج الواحد
    @Column(DataType.ARRAY(DataType.INTEGER))
    totalValue: number[]; 

    // إجمالى سعر الفاتورة
    @Column(DataType.INTEGER)
    totalPrice: number; 

    // إجمالى عدد العناصر المختارة
    @Column(DataType.INTEGER)
    totalItems: number; 

    // المبلغ المدفوع
    @Column(DataType.INTEGER)
    cash: number; 

    // المتبقى
    @Column(DataType.INTEGER)
    rest: number; 

    // طريقة الدفع
    @Column(DataType.STRING)
    payMethod: string; 
    
}
