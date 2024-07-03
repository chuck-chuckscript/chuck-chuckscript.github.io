
import {BsPhone, BsTelegram} from "react-icons/bs";


import { IoIosMail } from "react-icons/io";

export const Header = () => {





    return (
        <header className="header">

            <div className="header__logo">
                <span className="logo__CLetter">CC</span>
                <span className="logo__word">script</span>
            </div>
            <div className="header__menu">
                <nav>
                    <a className={'tg'} target={'_blank'} href={'https://t.me/t474r1n'}><BsTelegram/><span>Telegram</span></a>
                    <a className={'phone'} target={'_blank'} href={'tel:89660377452'}><BsPhone/><span>Phone</span></a>
                    <a className={'mail'} target={'_blank'} href={'mailto:blxxps@yandex.ru'}><IoIosMail/><span>Email</span></a>
                </nav>




            </div>


        </header>
    );
};

