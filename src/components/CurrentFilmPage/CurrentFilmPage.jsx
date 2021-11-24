import './style.scss'
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/actions/filmActions';
import { BASE_URL_IMG } from '../../constants/constants';
import { currentFilmSelector } from './selector';
import { useLocation, useParams } from 'react-router';
import { Spin } from 'antd';

export const CurrentFilmPage = () => {
  const dispatch = useDispatch()
  const { film: filmId } = useParams()
  const { filmData, isFetching  } = useSelector(currentFilmSelector)
  const location = useLocation()
  const contentType = location.pathname.split('/')[1]
  
  useEffect(() => {
    dispatch(getCurrentFilm(filmId, contentType))
  }, [dispatch, filmId, contentType])

  const spawnImg = () => {
    if (!filmData.poster_path) return
    return <img src={BASE_URL_IMG + filmData?.poster_path} className='filmPage__img' alt="#" /> //full film info will be here
  }

  return (
    <div className='filmPage-wrap'>
      <div>FilmID {filmId}</div>
      <div className='filmPage'>
        {isFetching ? <Spin size="large" /> : spawnImg()}
      </div>
      <Link to='/movies'>to All Films</Link>
    </div>
  )
}
