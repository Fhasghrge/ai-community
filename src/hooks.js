import { useState, useEffect } from 'react'
import * as Api from './apis';

export const useInfos = () => {
  const [infos, setInfos] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    Api.getMe().then(res => {
      if(res.code === 0) {
        setInfos(res.data)
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  return {
    infos,
    loading
  }
}
