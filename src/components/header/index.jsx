import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='flex justify-between p-3 text-lg'>
      <div className='flex'>
        <div>logo</div>
        <div className='text-2xl'>AI圈</div>
      </div>
      <div className='flex space-x-3 text-base'>
        <Link to='/login'>登录/注册</Link>
        <div>English</div>
        <Link to='/profile'>我的</Link>
      </div>
    </div>
  )
}