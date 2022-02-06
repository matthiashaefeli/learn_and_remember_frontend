import React from 'react'
import LoadingGif from '../../assets/images/gif/loading-arrow.gif'
import './loading.scss'


export default function Loading() {
  return (
    <div className='loading'>
      <h4>Data loaging...</h4>
      <img src={LoadingGif} alt='' />
    </div>
  )
}
