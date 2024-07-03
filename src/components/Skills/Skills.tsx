import {IoLogoReact} from "react-icons/io5";
import {SiMobx, SiRedux} from "react-icons/si";
import {BiLogoJavascript, BiLogoTypescript} from "react-icons/bi";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3, DiSass} from "react-icons/di";
import {BsPhone} from "react-icons/bs";
import style from './skills.module.scss';
import {IconType} from "react-icons";
import {ReactElement} from "react";




// type TypeSkill = 'react' | 'redux' | 'js' | 'css' | 'html' | 'sass' | 'phone' | 'ts';



interface Skill{
    logo: ReactElement<IconType>
    className: [className: string, modification: string] // ИСПРАВИТЬ ТЕМУ КАРТОЧЕК ИСХОДЯ ИЗ ИХ ТИПА

    text: string;
}

const initialSkills : Skill[] = [
    {
        logo: <IoLogoReact/>,
        className: [style.skills__item, style['react']],
        text: 'React'
    },
    {
        logo: <SiRedux/>,
        className: [style.skills__item, style['redux']],
        text: 'Redux'
    },
    {
        logo: <SiMobx/>,
        className: [style.skills__item, style['html']],
        text: 'Mobx'
    },
    {
        logo: <BiLogoJavascript/>,
        className: [style.skills__item, style['js']],
        text: 'JavaScript'
    },
    {
        logo: <AiFillHtml5/>,
        className: [style.skills__item, style['html']],
        text: 'HTML5'
    },
    {
        logo: <DiCss3/>,
        className: [style.skills__item, style['css']],
        text: 'CSS3'
    },
    {
        logo: <DiSass/>,
        className: [style.skills__item, style['sass']],
        text: 'Sass'
    },
    {
        logo: <BiLogoTypescript/>,
        className: [style.skills__item, style['ts']],
        text: 'TypeScript'
    },
    {
        logo: <BsPhone strokeWidth={0.01}/>,
        className: [style.skills__item, style['phone']],
        text: 'Responsive<br/>design'
    },




]


export const Skills = () => {

    return (
        <article className={style['skills']}>
            <h1>Навыки</h1>
            <ul className={style['skills__list']}>
                {initialSkills.map((item, i) => <li key={i} className={item.className.join(' ')}>
                    {item.logo}
                    <span dangerouslySetInnerHTML={{__html: item.text}}></span>
                </li>)}
            </ul>
        </article>
    )
}