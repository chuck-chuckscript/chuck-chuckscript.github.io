import {FC, ReactNode} from "react";
import {Button} from "@/components/UI/Button/Button.tsx";
import {BsXLg} from "react-icons/bs";
import style from "./modal.module.scss";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

export const Modal : FC<ModalProps> = ({isOpen, onClose, children}) => {
    if(isOpen){
        return (
            <section onClick={onClose} className={style.modal}>
                <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                    <Button className={style.modalCloseButton} variant={'unstyled'} onClick={onClose}><BsXLg/></Button>
                    {children}
                </div>
            </section>
        );
    }
    return null;
};

