export const OPEN_ORDER_CARD:'OPEN_ORDER_CARD' = 'OPEN_ORDER_CARD';
export const CLOSE_ORDER_CARD:'CLOSE_ORDER_CARD' = 'CLOSE_ORDER_CARD';
export type TopenOrderCard  = {
    readonly type: typeof OPEN_ORDER_CARD;
    orderCard:any
}
 export type TcloseOrderCard = {
    readonly  type: typeof CLOSE_ORDER_CARD
}

export const openOrderCard = (orderCard:any):TopenOrderCard => ({
type: OPEN_ORDER_CARD,
orderCard
})
export const closeOrderCard = ():TcloseOrderCard => ({
    type: CLOSE_ORDER_CARD
})
