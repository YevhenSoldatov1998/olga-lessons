import React, {FC} from "react";
import {Typography} from "components/modules";
import {TypographyVariant} from "helpers/types";
import {Character, NavigateFnParams, PageInfo} from "types";
import {Link, useNavigate} from "react-router-dom";

type CharactersListProps = {
  list?: Character[];
  info?: PageInfo;
  onNavigate: (params: NavigateFnParams) => void;
};

const CharactersList: FC<CharactersListProps> = ({
                                                   list,
                                                   info,
                                                   onNavigate,
                                                 }) => {
  const navigate = useNavigate()

  if (!list)
    return (
      <Typography variant={TypographyVariant.h24}>Список пустий</Typography>
    );
  return (
    <div className="characters-list">
      {list.map((item) => (
        <div key={item.id} className="characters-list__item">
          <Typography variant={TypographyVariant.h24}>{item?.name}</Typography>
          <Link to={'/character/' + item.id}>
            <img src={item.image} alt="hero"/>
          </Link>
          <Typography variant={TypographyVariant.p14}>
            {item?.species}
          </Typography>

          <button className='btn-more mt-4' onClick={() => navigate(`/character/${item.id}`)}>Більше</button>
        </div>
      ))}

      <div className="characters-navigation">
        <button disabled={!info?.prev} onClick={() => onNavigate("prev")}>
          Попередня сторінка
        </button>

        <button disabled={!info?.next} onClick={() => onNavigate("next")}>
          Наступна сторінка
        </button>
      </div>
    </div>
  );
};

export default CharactersList;
