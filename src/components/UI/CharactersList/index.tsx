import React, {FC} from 'react';
import {Typography} from "components/modules";
import {TypographyVariant} from "helpers/types";
import {Character, NavigateFnParams, PageInfo} from "types";


type CharactersListProps = {
  list?: Character[],
  info?: PageInfo,
  onNavigate: (params: NavigateFnParams) => void
}

const CharactersList: FC<CharactersListProps> = ({list, info, onNavigate}) => {
  if (!list) return (
    <Typography variant={TypographyVariant.h24}>Список пустий</Typography>
  )
  return (
    <div className='characters-list'>
      {list.map((item) => (
        <div key={item.id} className='characters-list__item'>
          <Typography variant={TypographyVariant.h24}>{item?.name}</Typography>
          <img src={item.image} alt="image"/>
          <Typography variant={TypographyVariant.p14}>{item?.species}</Typography>
        </div>
      ))}

      <div className='characters-navigation'>
        <button
          disabled={!info?.prev}
          onClick={() => onNavigate('prev')}
        >
          Попередня сторінка
        </button>

        <button
          disabled={!info?.next}
          onClick={() => onNavigate('next')}
        >
          Наступна сторінка
        </button>
      </div>
    </div>
  );
};

export default CharactersList;