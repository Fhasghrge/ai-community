import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Render from '../../components/markdownRender';
import { useInfos } from '../../hooks'
import * as Api from '../../apis'

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
  const navigate = useNavigate();
  const { loading, detail } = useDetail()
  const {infos} = useInfos();
  return (
    <div className='text-gray-700 w-2/3 m-auto mt-4'>
      <div className="title font-bold text-2xl text-center my-3">{detail.title}</div>
      <div className='body indent-2 w-2/3 m-auto'>
        <Render text={detail.body} /> 
      </div>
      {
        infos?.name === 'shuang' && 
        <div 
          className='text-red-600 border-2 w-max px-2 rounded border-red-600 ml-auto mt-20 hover:cursor-pointer hover:bg-zinc-200'
          onClick={() => {
            Api.deleteArticle(detail.articleId).then(res => {
              if(res.code === 0) {
                toast('删除成功');
                setTimeout(() => {
                  navigate('/home')
                }, 3000)
              }
            })
          }}
        >Delete</div>
      }
    </div>
  )
}
