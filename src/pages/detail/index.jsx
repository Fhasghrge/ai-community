import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Render from '../../components/markdownRender';

import * as Api from '../../apis';

const useDetail = () => {
  const { articleId } = useParams()
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    Api.getAriDetail(articleId).then(res => {
      if (res.code === 0) {
        setDetail(res.data)
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return {
    detail,
    loading
  }
}

export default function Detail() {
  const { loading, detail } = useDetail()
  return (
    <div className='text-gray-700 w-2/3 m-auto mt-4'>
      <div className="title font-bold text-2xl text-center my-3">{detail.title}</div>
      <div className='body indent-2 w-2/3 m-auto'>
        <Render text={detail.body} /> 
      </div>
    </div>
  )
}
