import style from './experince.module.scss'


interface ExperienceItem{
    dates: string,
    company: string,
    text: string,
    stackTech: string[]
    repositoryLink: string,
    url: string,
}

const exps : ExperienceItem[] = [
    {
        dates: 'Май 2023 — июль 2023',
        company: 'Turron Russia',
        text: 'В качестве разработчика должен был реализовать адаптивный сайт для кондитерской ' +
            'компании по макету Figma. Правки сайта производились строго под надзором руководства. Использовал в качестве инструментов для разработки:',
        stackTech: ['HTML5;','CSS3;','PHP;','JavaScript.'],
        repositoryLink: '',
        url: 'https://mandorlato.ru',
    },
    {
        dates: 'Май 2024 — июнь 2024',
        company: 'GOODBYE OFFICE',
        text: 'В качестве разработчика должен был реализовать адаптивный сайт для футбольной команды по макету Figma.' +
            'Использовал в качестве инструментов для разработки:',
        stackTech: ['React;','Sass;','HTML5;','CSS3;','Mobx;','react-icons;','axios;','PHP;','php-jwt.'],
        repositoryLink: 'https://github.com/chuck-chuckscript/goodbyeOffice',
        url: 'https://fcgoodbye.startuphelper.ru',
    }
]
export const WorkExperience = () => {


    return (
        <article className={style.experience}>
            <h1>Опыт работы</h1>
            <ul>
            {exps.map((exp, i) =>
                <li className={style.experience__item} key={i}>
                    <span className={style.experience__date}>{exp.dates}</span>
                    <article>
                        <h3>{exp.company}</h3>
                        <p>{exp.text}</p>
                        <ul>
                            {exp.stackTech.map((li, key) => <li key={key}>{li}</li>)}
                        </ul>
                        {exp.repositoryLink && <span className={style.experience__link}>Репозиторий проекта: <a target={"_blank"} href={exp.repositoryLink}>{exp.repositoryLink.replace('https://', '@')}</a></span>}
                        <br/>
                        {exp.url && <span className={style.experience__link}>Сайт: <a target={"_blank"}  href={exp.url}>{exp.url}</a></span>}

                    </article>
                </li>
            )}
            </ul>
        </article>
    )
}