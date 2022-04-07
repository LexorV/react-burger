export type TordersCard = {
createdAt:string;
ingredients:string[]
name:string;
number:number;
status:string;
updatedAt:string;
_id:string;
}
export type TordersList = {
    orders:TordersCard[];
    total:number;
    totalToday:number;
}