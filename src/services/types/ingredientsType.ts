export type Tingredient = {
    readonly calories: number;
    readonly carbohydrates: number;
    readonly fat: number;
    readonly image: string;
    readonly image_large: string;
    readonly image_mobile: string;
    readonly name: string;
    readonly price: number;
    readonly proteins: number;
    readonly type: string;
    readonly __v: number;
    readonly _id: string;
    numberIngred?: number;
    idConstr?: string;
}
export type TconstructorDrop = {
    index: number;
    ingredient: Tingredient;
}
type TorderOwner = {
    createdAt: string,
    email: string,
    name: string,
    updatedAt:string
}
export type TorderNumber = {
    createdAt:string,
    ingredients:any,
    name:string,
    number:number,
    owner:TorderOwner,
    price:number,
    status:string,
    updatedAt:string,
    _id:string
}