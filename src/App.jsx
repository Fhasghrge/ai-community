import { Routes, Route, Navigate as RouteNavigate } from 'react-router-dom'
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

function App() {

  return (
    <div className="App h-screen overflow-hidden flex flex-col justify-between">
      <header>
        <Header />
        <Navigate />
      </header>
      <main className='h-full overflow-scroll pb-10 mt-1'>
        <Routes>
          <Route exact path='/' element={<RouteNavigate to='/home' replace />}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/solicit' element={<Solicit />} />
          <Route path='/encrypt' element={<Encrypt />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NoFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
