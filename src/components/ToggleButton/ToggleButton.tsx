import styles from '@components/ToggleButton/ToggleButton.module.css'

const ToggleButton = () => {
    return (
        <div className={styles.tglBtn}>
            <input name="color-scheme" type="checkbox" defaultChecked id="color-scheme-toggle" aria-label="toggle color scheme" />
            <label htmlFor="color-scheme-toggle"></label>
        </div>
    )
}

export default ToggleButton;