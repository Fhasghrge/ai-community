
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
    <div className='flex justify-around text-center space-x-1'>
      {
        links.map(({ path, text }) => (
          <div key={path} className={`py-2 bg-sky-900 opacity-70 w-1/4 
              hover:bg-sky-700 hover:text-gray-100 hover:font-bold
              ${path=== location.pathname ? 'border-b-2' : ''}`}
          >
            <Link key={path} to={path}>{text}</Link>
          </div>
        ))
      }
    </div>
  )
}