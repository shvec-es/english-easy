import React from 'react';
import {ReduxService} from '../../services/ReduxService'
import AllWordsItem from './AllWordsItem/AllWordsItem'

const AllWords = () => {
    const {data: words, isLoading, error} = ReduxService.useFetchAllWordsQuery('')

    return (
      <div>
          <ul>
              {words && words.map(elWord => {
                  return <AllWordsItem key={elWord.id} {...elWord}/>
              })}
          </ul>
      </div>
    );
};

export default AllWords;
