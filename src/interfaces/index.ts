import { RowDataPacket } from "mysql2";
export interface ProductType extends RowDataPacket {
	id?: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	quantity: number;
	rating: { rate: number; count: number };
}
