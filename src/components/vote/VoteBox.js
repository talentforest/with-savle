import Image from "next/image";
import Favorite from "public/img/Favorite.svg";
import { useCallback } from "react";
import { fetchPutVoteLike } from "src/api/vote";

import { useLike } from "@/hooks/useLike";
import { LOCALSTORAGE_VOTE_LIKE } from "@/utils/constants";

import style from "./VoteBox.module.scss";

export default function VoteBox({ voteBoxData }) {
  const { id, title, likes, voteSelect, voteComments } = voteBoxData;

  const [like, likeNums, localStorageHandler] = useLike(
    id,
    likes,
    LOCALSTORAGE_VOTE_LIKE,
  );

  const handleLikeToggle = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      localStorageHandler();
      const parameter = { id: id, like: !like };
      fetchPutVoteLike(parameter);
    },
    [id, like, localStorageHandler],
  );

  return (
    <div className={style.vote_box}>
      <h1 className={style.subject_box}>
        {title.length > 35 ? `${title.slice(0, 35)}...` : title}
      </h1>
      {voteSelect.map((selectItem) => (
        <div key={selectItem.item} className={style.vote_select_items}>
          <input
            type="radio"
            id={selectItem.item}
            name="vote"
            value={selectItem.item}
            className={style.radio_btn}
          />
          <label htmlFor={selectItem.item}>{selectItem.item}</label>
        </div>
      ))}
      <div className={style.favorite_comment}>
        <div
          className={style.favorite}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <Favorite
            fill={like ? "#FF2222" : "#fff"}
            onClick={handleLikeToggle}
          />
          <span>{likeNums}</span>
        </div>
        <div>
          <Image src="/img/comment.svg" alt="Comment" width={21} height={21} />
          <span>{voteComments.length}</span>
        </div>
      </div>
      <button className={style.button}>더보기 &gt;</button>
    </div>
  );
}
