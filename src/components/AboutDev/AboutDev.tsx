
export const AboutDev = () => {
    return (
        <article className='info'>
            <div className={'info__photo'}>
                <img alt={'me'} src={'/me1.png'}/>
            </div>
            <div className={'info__text'}>
                <p className='info__startText'>
                    Начинающий React-разработчик с базовыми
                    знаниями JavaScript, HTML, CSS, SASS и React.js.
                    Ищу возможность применить свои навыки и развиваться в динамичной команде.
                </p>
                <h3>Информация обо мне</h3>
                <pre className='info__finalInfo'>
                    {
                        '{\n' +
                        '   ФИО: "Чуканов Наиль Эльнурович",\n' +
                        '   Место проживания: "Московская область, г.Звенигород",\n' +
                        '   Образование: "ГБПОУ Одинцовский техникум",\n' +
                        '   Квалификация: "Разработчик веб и мультимедийных приложений"\n' +
                        '}'
                    }

                    </pre>
            </div>

        </article>
    );
};

