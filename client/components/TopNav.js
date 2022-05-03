import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    < div className="d">
    <Menu id="menud" mode = "horizontal" selectedKeys={[current]}  >
       <Item style={{textDecorationStyle:"none" , background:"none"}}>
       <img src="logo.svg" style={{width:"50px" }}/>
       </Item> 
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>

  {user!=null && user.role && user.role.includes("Instructor")&& (
		   <Item 
		   key="/instructor/course/create" 
		   onClick={(e)=>setCurrent(e.key)}
		   icon = { <CarryOutOutlined/> } >
              <Link   href = "/instructor/course/create"><a>Create Course</a></Link> </Item>
		   )}
       {user!==null &&user.role && !user.role.includes("Instructor") &&(
		   <Item 
		   key="/user/become-instructor" 
		   onClick={(e)=>setCurrent(e.key)}
		   icon = { <TeamOutlined/> } >
              <Link  href = "/user/become-instructor"><a>Become Instructor</a></Link> </Item>
           )
            
            }

      {user === null && (
        <>
          <Item
            className="float-right"
            key="/register"
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
            style={{marginLeft: 'auto'}}
          >
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Item>

          <Item
            className="float-right"
            key="/login"
            onClick={(e) => setCurrent(e.key)}
            icon={<LoginOutlined />}
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Item>
        </>
      )}
 {user!==null && user.role && user.role.includes("Instructor") && (
        <Item
          key="/instructor"
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
          className="float-right"
          style={{ marginLeft: 'auto' }}
        >
          <Link href="/instructor">
            <a>Instructor</a>
          </Link>
        </Item>
      )}
      {user !== null && (
        <SubMenu  style={{  background:"none"}}
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className="float-right"
        >
          <ItemGroup style={{  fontFamily:"Akshar, Haettenschweiler, 'Arial Narrow Bold', sans-serif", 
                                                                            fontWeight:"bolder" }}>
            <Item key="/user">
              <Link href="/user">
                <a>Dashboard</a>
              </Link>
            </Item>
            <Item onClick={logout}>Logout</Item>
          </ItemGroup>
        </SubMenu>
      )}

     
    </Menu>
    </div>
  );
};

export default TopNav;
