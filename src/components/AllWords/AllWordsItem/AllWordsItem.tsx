import React from 'react';
import {IWord} from '../../../store/models/Interfaces'

const AllWordsItem = ({wordEn, wordRu}: IWord) => {
    return (
      <li key={wordEn}>{`${wordEn}: ${wordRu}`}</li>
    );
};

export default AllWordsItem;
