import profile from './profile.module.css';
import {ProfileMenu} from './ProfileMenu';
export const  HistoryOrdes = () => {
    console.log('test')
    return(
        <div className={profile.main}>
              <div className={profile.main__box}>
            <ProfileMenu />
            <div>
                <p>test</p>
            </div>
            </div>

        </div>
    )
}