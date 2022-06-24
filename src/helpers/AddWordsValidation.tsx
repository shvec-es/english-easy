interface IValidate {
    name: string;
    value: string;
    setErrors: ( value: IAddWordState ) => void;
    errors: IAddWordState;
}

interface IAddWordState {
    wordRu: string;
    wordEn: string;
}

export const wordsValidate = ({name, value, setErrors , errors}: IValidate) => {
    switch (name) {
        case 'wordRu':
            setErrors({
                ...errors,
                wordRu: (/^[а-яА-ЯёЁ]+$/).test(value) ? '' : 'Only russian letters'
            })
            break
        case 'wordEn':
            setErrors({
                ...errors,
                wordEn: (/^[a-zA-Z]+$/).test(value) ? '' : 'Only english letters'
            })
            break
        default:
            return ''
    }
};
