export type Tingredient = {
    readonly calories?: number;
    readonly carbohydrates?: number;
    readonly fat?: number;
    readonly image?: string;
    readonly image_large?: string;
    readonly image_mobile?: string;
    readonly name?: string;
    readonly price?: number;
    readonly proteins?: number;
    readonly type?: string;
    readonly __v?: number;
    readonly _id?: string;
    idConstr?: string
}
export type TconstructorDrop = {
    index: number;
    ingredient: Tingredient;
}


/*
type TconstructorIngredientTemp = Omit<ingredient,
    'fat'
    | 'image_large'
    | 'image_mobile'
    | 'proteins'
    | '__v'
    | 'calories'
    | 'carbohydrates'
>;
export type TconstructorIngredient = TconstructorIngredientTemp & {
    idConstr: string
}
export type TingredientTypeComponent = {
    ingredient: ingredient;
    setModalIsOpen: Function;
}
export type TconstructorIngredientComponent = {
    ingredient: TconstructorIngredient;
    index: number;
}
export type TingredientsInConstructorLock = {
    arrayInConstructor: [];
    positionEn: 'top' | 'bottom'
    position: string;
}
export type TingredientsInConstructor = {
    arrayInConstructor: any;
    type: string;
}
*/