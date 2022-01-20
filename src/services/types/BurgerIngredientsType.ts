export type ingredient = {
    calories: number;
    carbohydrates: number;
    fat: number;
    image:string;
    image_large:string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    __v: number;
    _id: string;
}
export type TingredientTypeComponent = {
ingredient:ingredient;
setModalIsOpen: Function;
}
export type TingredientsTypeComponent = {
    data:any,
    type:string,
    setModalIsOpen:Function;
}