import { useState, useEffect } from "react";
import Link from "next/link";

const UserNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
     <div className= "nav flex-column mt-2" style={{background:" linear-gradient(to bottom ,rgba(0,0,0,0.70) 0%,rgba(17,24,119,0.74) 100%) ",borderRadius:"5px"}}>
   <Link href="/user">
		     <a className={`nav-link ${current === "/instructor" && "active"}`} style={{color:"white"}}> Dashboard</a>
	      </Link>
		  </div>
  );
};

export default UserNav;
