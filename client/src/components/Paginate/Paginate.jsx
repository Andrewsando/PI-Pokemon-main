import React from "react";
import style from "./Paginate.module.css";
import { useDispatch } from "react-redux";
import { prev, next } from "../../redux/action";

export default function Paginate({ numPage, cantPage }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {numPage > 1 && (
          <button className={style.button} onClick={() => dispatch(prev())}>
            PREV
          </button>
        )}
        {numPage < cantPage && (
          <button className={style.button} onClick={() => dispatch(next())}>
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}
