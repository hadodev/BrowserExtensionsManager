import styles from '@components/Button/Button.module.css'

const Button = ({ label = "", onClick }: { label?: string; onClick?: () => void }) => {
    return (
        <button className={styles.button} onClick={onClick} type="button">
            {label}
        </button>
    )
}

export default Button