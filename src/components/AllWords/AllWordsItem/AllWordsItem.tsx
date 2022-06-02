import React from 'react';
import {IWords} from '../../../store/models/Interfaces'

interface IItem {
    id: string;
    wordEn: string;
    wordRu: string;
}

const AllWordsItem = ({id, wordEn, wordRu}: IItem) => {
    return (
      <li>{`${wordEn}: ${wordEn}`}</li>
    );
};

export default AllWordsItem;
