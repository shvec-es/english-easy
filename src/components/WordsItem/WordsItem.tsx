import {IWord} from '../../store/models/Interfaces'

const WordsItem = ({wordEn, wordRu}: IWord) => {
    return (
      <li key={wordEn}>{`${wordEn}: ${wordRu}`}</li>
    );
};

export default WordsItem;
