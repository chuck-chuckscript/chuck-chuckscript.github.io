import style from './testws.module.scss';
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useCreateObject} from "@/hooks/useCreateObject.tsx";
import {Button} from "@components/UI/Button/Button.tsx";
import { LuClipboardCopy } from "react-icons/lu";
import {BsCheck} from "react-icons/bs";
export const TestWorkSpace = () => {


    const [value, setValue] = useState<string>('');
    const {convert, convertFromObject} = useCreateObject();
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const refResult = useRef<HTMLPreElement>(null);
    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }

    const copyhandler = () => {
        if(refResult.current && refResult.current.textContent){
            window.navigator.clipboard.writeText(refResult.current.textContent).then(() => setIsCopied(true));
            // console.log(refResult.current.textContent);

            // setTimeout(() => setIsCopied(false), 2000);
        }


    }

    useEffect(() => {
        convertFromObject(value);
        setIsCopied(false);

    }, [value])

    return (
        <article className={style.workSpace}>
            <h1>Демонстрация навыка React (Конвертер текста в Object)</h1>
            <p className={style.workSpace__guide}>Для создания объекта необходимо ввести паттерн: <span>ключ/разделитель/значение</span>.
            В качестве разделителя можно использовать <span>" ", ".", "!", ":"</span>.<br/><span className={style.warning}>ВНИМАНИЕ Данный конвертер не поддерживает вложенные объекты</span></p>
            <p className={style.workSpace__input}>
                Пример ввода:<br/>
                <span>
                    employeeName "Наиль"<br/>
                    typeDev "Frontend"<br/>
                </span>
            </p>
            <pre className={style.workSpace__output}>
                Пример вывода:<br/>
                <span>
                    &#123;<br/>
                    &nbsp;&nbsp;&nbsp;employeeName: "Наиль",<br/>
                    &nbsp;&nbsp;&nbsp;typeDev: "Frontend",<br/>
                    &#125;
                </span>

            </pre>
            <textarea onChange={changeHandler} value={value} placeholder={'Напишите текст в формате ("key","value")'}
                      className={style.workSpace__textarea}></textarea>
            <pre ref={refResult} className={style.workSpace__result}>
                <Button onClick={copyhandler} className={style.copy} variant={'unstyled'}>{isCopied ? <BsCheck/> : <LuClipboardCopy/>}</Button>
                {convert}
            </pre>
        </article>
    )
}

