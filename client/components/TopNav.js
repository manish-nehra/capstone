import { Menu } from 'antd';
import Link from 'next/link';
import { AppstoreOutlined, LoginOutlined, LogoutOutlined, CoffeeOutlined, UserAddOutlined } from'@ant-design/icons';
import {useState ,useEffect, useContext} from "react"; 

import {Context} from "../context";
import axios from "axios"
import { useRouter } from "next/router";
import {toast} from "react-toastify";
//import SubMenu from 'antd/lib/menu/SubMenu';

const { Item, SubMenu } = Menu;

const TopNav = () => {
    const [current , setCurrent] = useState("");

    const {state, dispatch} = useContext(Context);
    const {user} = state;

    const router = useRouter();


    useEffect(()=>{
        process.browser && setCurrent(window.location.pathname)
        // console.log(window.location.pathname)
    },[process.brower && window.location.pathname]);

    const logout = async() => {
        dispatch({type: "LOGOUT" });
        window.localStorage.removeItem("user");
        const {data} = await axios.get("/api/logout");
        toast(data.message);
        router.push("/login");
    };

    return ( <Menu mode = "horizontal" selectedKeys={[current]}>
        <Item  key="/" onClick={(e)=>setCurrent(e.key)} icon = { <AppstoreOutlined/> } >
        <Link href = "/"> App </Link> 
        </Item>

        {user === null && (
            <>
              <Item key="/login" onClick={(e)=>setCurrent(e.key)} icon = { <LoginOutlined/> } >
              <Link href = "/login"> Login </Link> </Item>
 
              <Item key="/register" onClick={(e)=>setCurrent(e.key)} icon = { <UserAddOutlined/> } >
             <Link href = "/register"> Register </Link> </Item>
            </>
        )}
        
        {user !== null && (
            <SubMenu icon={<CoffeeOutlined />} title={user && user.name} className="float-right">
                <Item onClick={logout} className="float-right">
            Logout

          </Item>
            </SubMenu>
        )}

        </Menu>
        );
};

export default TopNav;