import {useState} from "react";

export const useCreateObject = () => {
    const [convert, setConvert] = useState<string>('{}');
    const convertFromObject = (str: string) => {
        if(str.length > 0){
            const replace = str.split('\n').filter(item => item.length > 1);
            let object = "{";

            for (const field of replace) {
                const matched = field.match(/("?[a-zA-Zа-яА-Я\d]+"?)[,:\s+!](.+)/);
                if(matched){
                    object += `\n  ${matched[1]}: ${matched[2]},`;
                }
            }
            object+= "\n}"
            setConvert(object);
        }
        else{
            setConvert('{}');
        }
    }

    return {convert , convertFromObject}


}