// Styles
import './App.css'

// React
import { Routes, Route, Link } from 'react-router-dom'

// antd
import { Layout, Typography, Space } from 'antd'

//components
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Exchanges from './components/Exchanges'
import Cryptocurrencies from './components/Cryptocurrencies'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News'

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={Homepage} />
              <Route path='/exchanges' element={Exchanges} />
              <Route path='/cryptocurrencies' element={Cryptocurrencies} />
              <Route path='/crypto/:coinId' element={CryptoDetails} />
              <Route path='/news' element={News} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default App
