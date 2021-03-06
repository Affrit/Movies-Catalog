// libs
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// components
import { Card, Rate, Alert } from 'antd';
import { Rating } from '../Rating/Rating';
// other
import { favoritesToggle } from '../../store/actions/favoritesPageActions';
import { BASE_URL_IMG } from '../../constants/constants';
import { isInFavorites } from '../../helpers/favoriteHelpers';
import { favoritesSelector } from '../FavoritesPage/selector';
import { authSelector } from '../PrivateRoute/selector';
import altImg from '../../img/default.png';
import './style.scss';

const { Meta } = Card;
export const MovieCard = ({ filmData }) => {
  const {
    id, poster_path, title, release_date,
    vote_average, vote_count, contentType,
  } = filmData
  const [isLoadError, setIsLoadError] = useState(false)
  const [authError, setAuthError] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const { isAuth } = useSelector(authSelector)
  const { favoritesData } = useSelector(favoritesSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const imgSrc = poster_path ? BASE_URL_IMG + poster_path : ''

  useEffect(() => {
    if (isInFavorites(filmData, favoritesData)) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
  }, [favoritesData, filmData])

  const onError = () => {
    setIsLoadError(true)
  }

  const onLikeClicked = () => {
    if (isAuth) {
      dispatch(favoritesToggle(filmData))
    } else {
      setAuthError(true)

      setTimeout(() => {
        onAlertClose()
      }, 4000)
    }
  }

  const onAlertClose = () => {
    setAuthError(false)
  }

  const onCardClicked = () => {
    navigate(`/${contentType}/${id}`)
  }

  const cardCover = (
    <div className='movie-card__cover'>
      <Rate
        className='movie-card__like'
        count={1}
        onChange={onLikeClicked}
        value={isLiked}
      />
      <img
        className='movie-card__img' alt='#'
        src={isLoadError ? altImg : imgSrc}
        onError={onError} onClick={onCardClicked}
      />
    </div>
  )

  const avatar = (
    <div className='movie-card__rating'>
      <Rating
        rating={vote_average}
        vote_count={vote_count}
      />
    </div>
  )

  const cardTitle = (
    <span
      onClick={onCardClicked}
      className='movie-card__title'
    >
      {title}
    </span>
  )

  return (
    <>
      <Card
        hoverable
        className='movie-card'
        cover={cardCover}
      >
        <Meta
          avatar={avatar}
          title={cardTitle}
          description={release_date}
        />

        {authError &&
          <div className='movie-card__alert'>
            <Alert
              message="You must be autorized"
              type="warning"
              closable
              onClose={onAlertClose}
            />
          </div>}
      </Card>
    </>
  )
}
