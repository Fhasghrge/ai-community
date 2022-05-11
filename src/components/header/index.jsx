import { Link, useLocation } from 'react-router-dom'
const SearchShows = [
  '/community',
  '/home',
  '/solicit'
]

export default function Header() {
  const location = useLocation()
  return (
    <div className='flex justify-between p-3 text-lg'>
      <div className='flex space-x-2'>
        <div className='w-8 h-8 rounded-full overflow-hidden'>
          <img className='w-8 h-8' src="/images/logo.jpg" alt="logo" />
        </div>
        <div className='text-2xl'>AI圈</div>
      </div>
      {
        SearchShows.includes(location.pathname) &&
          <div className="flex justify-center items-center text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-gray-300" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div className="border rounded border-gray-400">
              <input type="text" className='bg-transparent w-96 h-7 focus:outline-none focus:bg-gray-700' />
              <button className="border-l px-2 border-gray-400">搜索</button>
            </div>
          </div>
      }
      <div className='flex space-x-3 text-base'>
        <Link to='/login'>登录</Link>
        <Link to='/profile'>我的</Link>
      </div>
    </div>
  )
}
