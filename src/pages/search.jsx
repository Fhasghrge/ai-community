import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import * as Api from '../apis';

const useSearch = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { title } = useParams()
  useEffect(() => {
    setLoading(true)
    Api.searchArticle(title).then(res => {
      if (res.code === 0) {
        setList(res.data)
      }
    }).finally(() => setLoading(false))
  }, [])
  return {
    list,
    loading
  }
}
export default function Search() {
  const { list, loading } = useSearch();
  const navigate = useNavigate()
  return (
    <div className='search w-3/5 m-auto mt-8'>
      {
        list?.length ?
          list.map(item => (
            <div key={item.articleId} className="w-full px-4">
              <div
                className="text-xl font-bold text-gray-700 hover:cursor-pointer hover:underline"
                onClick={() => navigate('/detail/' + item.articleId)}
              >{item.title}</div>
              <div className="text-gray-500 h-20 text-ellipsis">{item.body}</div>
            </div>
          ))
          :
          <div className='text-center mt-10 text-gray-400'>未发现内容</div>
      }
    </div>
  )
}
