import Link from 'next/link';
const UserNav = ()=> {
	
	return (
<div className= "nav flex-column mt-2" style={{background:" linear-gradient(to bottom ,rgba(0,0,0,0.70) 0%,rgba(17,24,119,0.74) 100%) ",borderRadius:"5px"}}>
	      <Link href="/user">
		     <a className="nav-link active" style={{color:"white"}}>Dashboard</a>
	      </Link>

	   </div>
	   
	
	);
};
export default UserNav;