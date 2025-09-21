import styles from '@components/CheckButton/CheckButton.module.css'

type CheckButtonProps = {
    isActive: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckButton ({ isActive, onChange }: CheckButtonProps) {
  return (
    <input type="checkbox" className={styles.checkbox} name="enable" checked={isActive} onChange={onChange} />
  )
}

export default CheckButton