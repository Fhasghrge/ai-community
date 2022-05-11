
import { Link, useLocation } from 'react-router-dom'

const links = [
  {
    path: '/home',
    text: '首页'
  },
  {
    path: '/community',
    text: '人工智能论坛'
  },
  {
    path: '/solicit',
    text: '项目招揽'
  },
  {
    path: '/encrypt',
    text: '项目加密'
  }
]

export default function Navigate() {
  const location = useLocation();
  return (
    <div className='flex justify-around text-center space-x-0.5 text-gray-700'>
      {
        links.map(({ path, text }) => (
          <Link key={path} className={`py-2 bg-slate-400 opacity-70 w-1/4 
          hover:bg-slate-500 hover:text-gray-100 hover:font-bold
          ${path === location.pathname ? 'border-b-2' : ''}`} key={path} to={path}>
            <div className='text-gray-700'> {text} </div>
          </Link>
  ))
}
    </div >
  )
}
