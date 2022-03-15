import feedStyle from  './feed.module.css';
import {FeedListCardOrder} from './feedListCardOrder';
import { FeedOrderStatistics } from './feedOrderStatistics';
export const Feed = () => {
return (
    <section className={feedStyle.feed}>
        <FeedListCardOrder />
        <FeedOrderStatistics />
    </section>
)
}