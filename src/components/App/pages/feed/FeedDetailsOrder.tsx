import feedStyle from './feed.module.css';
import {
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
export const FeedDetailsOrder = () => {
    return (
        <section className={feedStyle.details_main}>
        <div  className={feedStyle.details_main_popap}>
            <h2 className={`text_type_main-small mb-10 ${feedStyle.details_number_order}`}>#034533</h2>
            <p className='text text_type_main-medium mb-3'>Black Hole Singularity острый бургер</p>
            <p className='text text_type_main-small mb-15'>Выполнен</p>
            <p className ='text text_type_main-medium mb-6'>Cостав:</p>
            <ul className={feedStyle.details_lists}>
                <li className = {feedStyle.details_list_ingredient}>
                    <img className={`${feedStyle.card__picture} mr-4`} alt='картинка'  src='https://code.s3.yandex.net/react/code/meat-01.png'></img>
                    <p className='text text_type_main-small'>Флюоресцентная булка R2-D3</p>
                    <div className={feedStyle.details_ingredient_price_box}>
                        <p> 2 x 20</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </li>
            </ul>
            <div className={feedStyle.details_bottom_box}>
                <p className='text_color_inactive'>Вчера, 13:50 i-GMT+3</p>
                <div className ={feedStyle.details_box_price}>
                <p className ='text text_type_digits-default'>510</p>
                <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
        </section>
    )
}