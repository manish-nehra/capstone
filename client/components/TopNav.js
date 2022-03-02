import { Menu } from 'antd';
import Link from 'next/link';
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import {useState ,useEffect} from "react"; 
const { Item } = Menu;

const TopNav = () => {
    const [current , setCurrent] = useState("");

    useEffect(()=>{
        process.browser && setCurrent(window.location.pathname)
        // console.log(window.location.pathname)
    },[process.brower && window.location.pathname]);

    return ( <Menu mode = "horizontal" selectedKeys={[current]}>
        <Item  key="/" onClick={(e)=>setCurrent(e.key)} icon = { <AppstoreOutlined/> } >
        <Link href = "/"> App </Link> 
        </Item>

        <Item key="/login" onClick={(e)=>setCurrent(e.key)} icon = { <LoginOutlined/> } >
        <Link href = "/login"> Login </Link> </Item>
 
        <Item key="/register" onClick={(e)=>setCurrent(e.key)} icon = { <UserAddOutlined/> } >
        <Link href = "/register"> Register </Link> </Item>

        </Menu>
        );
};

export default TopNav;