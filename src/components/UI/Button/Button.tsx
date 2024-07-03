import {FC, MouseEventHandler, ReactNode} from "react";
import style from './button.module.scss';


type StyleVariant = 'default' | 'unstyled';

type EmptyClickHandler = () => null;
interface ButtonProps{
    onClick?: MouseEventHandler<HTMLButtonElement> | EmptyClickHandler;
    className?: string;
    children?: ReactNode;
    variant?: StyleVariant;
}

export const Button : FC<ButtonProps> = ({onClick, className, children, variant = 'default'})  => {

    if (variant === 'default') {
        return (
            <button onClick={onClick} className={style.defaultButton}>{children}</button>
        )
    }
    return <button onClick={onClick} className={className}>{children}</button>


}