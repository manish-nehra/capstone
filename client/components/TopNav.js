import { Menu } from 'antd';
import Link from 'next/Link';
// import Register from '../pages/register';
// import Login from '../pages/login';
// import Index from '../pages';
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';

const { Item } = Menu;

const TopNav = () => {
    return ( <
        Menu mode = "horizontal" >
        <
        Item icon = { < AppstoreOutlined / > } >
        <
        Link to = "/" > App < /Link> <
        /Item>

        <
        Item icon = { < LoginOutlined / > } >
        <
        Link to = "/login" > Login < /Link> <
        /Item>

        <
        Item icon = { < UserAddOutlined / > } >
        <
        Link to = "/register" > Register < /Link> <
        /Item>

        <
        /Menu>

    );
};

export default TopNav;