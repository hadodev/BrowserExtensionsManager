import styles from '@components/headerBar/HeaderBar.module.css'
import Icon from '@components/Icon/Icon'
import ToggleButton from '@components/ToggleButton/ToggleButton'


const HeaderBar = () => {
    return (
        <header className={styles.header}>
            <Icon />
            <ToggleButton />
        </header>
    )
}

export default HeaderBar