import navStyles from './navStyles.module.scss'

export default function NavigationBar({ props }) {


    return (
        <>
            <div className={navStyles.navWrapper}>
                <h2 className={navStyles.logo}>
                    Industrial Space
                </h2>

            </div>
        </>
    )
}