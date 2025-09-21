import styles from '@components/headerBar/HeaderBar.module.css'
import Icon from '@components/icon/Icon'
import ToggleButton from '@components/toggleButton/ToggleButton'


const HeaderBar = () => {
    return (
        <header className={styles.header}>
            <Icon />
            <ToggleButton />
        </header>
    )
}

export default HeaderBar