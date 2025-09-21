import { CardProps } from '@/types';
import Button from '@components/Button/Button.tsx';
import styles from '@components/card/Card.module.css';
import CheckButton from '@components/CheckButton/CheckButton.tsx';


const Card = ({ card, onToggleActive, onRemove }: CardProps) => {
    const dialogId = `remove-dialog-${card.name.replace(/\s+/g, '-').toLowerCase()}`;

    const openDialog = () => {
        const dialog = document.getElementById(dialogId) as HTMLDialogElement;
        if (dialog) {
            dialog.showModal();
        }
    };

    const closeDialog = () => {
        const dialog = document.getElementById(dialogId) as HTMLDialogElement;
        if (dialog) {
            dialog.close();
        }
    };

    const handleConfirmRemove = () => {
        if (onRemove) {
            onRemove();
        }
        closeDialog();
    };

    return (
        <>
            <div className={styles.card}>
                <section>
                    <img src={card.logo} alt="Card Image" />
                    <article>
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                    </article>
                </section>
                <footer>
                    <Button label="Remove" onClick={openDialog} />
                    <CheckButton isActive={card.isActive} onChange={() => onToggleActive && onToggleActive(!card.isActive)} />
                </footer>
            </div>
            <dialog id={dialogId} className={styles.dialog}>
                <form method="dialog">
                    <p>Are you sure you want to remove this extension?</p>
                    <div>
                        <button type="submit" onClick={handleConfirmRemove}>Remove</button>
                        <button type="button" onClick={closeDialog}>Cancel</button>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default Card;
