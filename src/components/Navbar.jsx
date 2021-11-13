// Icon
import icon from '../images/ICON.png'

// antd
import { Button, Menu, Typography, Avatar } from 'antd'
import {
  HomeOutlined,
  MoneyCollectionOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons'

// React
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large'/>
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptonia</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
              <Link to='/cyrptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<HomeOutlined />}>
              <Link to='/exchanges'>Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
              <Link to='/news'>News</Link>
          </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
