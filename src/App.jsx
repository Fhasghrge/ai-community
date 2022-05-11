import { Routes, Route, Navigate as RouteNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import Footer from './components/footer';
import Navigate from './components/navigates';
import Header from './components/header';
import Home from './pages/home';
import Community from './pages/community';
import Solicit from './pages/solicit';
import Encrypt from './pages/encrypt';
import Login from './pages/login';
import Profile from './pages/profile';
import NoFound from './pages/NoFound'
import Detail from './pages/detail';
import Search from './pages/search';

function App() {

  return (
    <div className="App h-screen overflow-hidden flex flex-col justify-between">
      <header className='bg-slate-500'>
        <Header />
        <Navigate />
      </header>
      <main className='h-full overflow-scroll pb-10'>
        <Routes>
          <Route exact path='/' element={<RouteNavigate to='/home' replace />}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/solicit' element={<Solicit />} />
          <Route path='/encrypt' element={<Encrypt />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/detail/:articleId' element={<Detail />} />
          <Route path='/search/:title' element={<Search />} />
          <Route path='*' element={<NoFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default App
