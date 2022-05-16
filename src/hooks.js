import { useState, useEffect } from 'react'
import * as Api from './apis';

export const useInfos = () => {
  const [infos, setInfos] = useState();
  const [loading, setLoading] = useState(true);
  const refresh = () => {
    setLoading(true)
    Api.getMe().then(res => {
      if(res.code === 0) {
        setInfos(res.data)
      }
    }).finally(() => {
      setLoading(false)
    })
  }
  useEffect(() => {
    refresh()
  }, [])
  return {
    infos,
    loading,
    refresh
  }
}
