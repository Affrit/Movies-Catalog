// libs
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// components
import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SiderApp } from '../../Layouts/Sider/SiderApp';
// other
import { setSearchPage } from '../../../store/actions/searchPageActions';
import './style.scss';

const { SubMenu } = Menu

export const SearchSider = ({ currentLocation }) => {
  const dispatch = useDispatch()

  const onSwitchSearchResult = () => {
    dispatch(setSearchPage(1))
  }

  return (
    <SiderApp>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentLocation]}
        defaultOpenKeys={['sub1']}
        className='sider-menu'
      >
        <SubMenu
          key="sub1"
          icon={<SearchOutlined />}
          title="Search results"
          className='sub-menu'
        >

          <Menu.Item key="movie">
            <Link to='/search/movie' onClick={onSwitchSearchResult}>
              <span>Movies</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="tv">
            <Link to='/search/tv' onClick={onSwitchSearchResult}>
              <span>Shows</span>
            </Link>
          </Menu.Item>

        </SubMenu>
      </Menu>
    </SiderApp>
  )
}
