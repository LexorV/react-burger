export type ingredient = {
    readonly calories: number;
    readonly carbohydrates: number;
    readonly fat: number;
    readonly image:string;
    readonly image_large:string;
    readonly image_mobile: string;
    readonly name: string;
    readonly price: number;
    readonly proteins: number;
    readonly type: string;
    readonly __v: number;
    readonly _id: string;
}
export type TingredientTypeComponent = {
ingredient:ingredient;
setModalIsOpen: Function;
}
export type TingredientsTypeComponent = {
    data:any;
    type:string;
    setModalIsOpen:Function;
}