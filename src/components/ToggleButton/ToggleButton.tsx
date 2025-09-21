import styles from '@components/toggleButton/ToggleButton.module.css'

const ToggleButton = () => {
    return (
        <div className={styles.tglBtn}>
            <input name="color-scheme" type="checkbox" defaultChecked id="color-scheme-toggle" />
                <label htmlFor="color-scheme-toggle"></label>
            </div>
    )
}

export default ToggleButton;