import feedStyle from './feed.module.css'
export const FeedOrderStatistics = () => {
    return (
        <div className={feedStyle.statistics}>
            <div className={feedStyle.statistics__number_order}>
            <div className={feedStyle.statistics__number_box}>
                <p className='text text_type_main-medium mb-6'>Готовы:</p>
                <ul className={feedStyle.statistics__number_list}>
                <li className={`text text_type_digits-default ${feedStyle.statistics__number}`}>123124</li>
             <li className={`text text_type_digits-default ${feedStyle.statistics__number}`}>123124</li>
                
                </ul>
            </div>
            <div className={feedStyle.statistics__number_box}>
            <p className='text text_type_main-medium  mb-6'>В работе:</p>
            <ul className={feedStyle.statistics__number_list}>
            <li className='text text_type_digits-default'>123124</li>
             <li className='text text_type_digits-default'>123124</li>
            </ul>
            </div>
            </div>
            <div>
                <p className="text text_type_main-medium">
                Выполнено за все время:
                </p>
                <p className="text text_type_digits-large">28752</p>
            </div>
            <div>
                <p className="text text_type_main-medium">
                Выполнено за сегодня:
                </p>
                <p className="text text_type_digits-large">138</p>

                 </div>

        </div>
    )
}