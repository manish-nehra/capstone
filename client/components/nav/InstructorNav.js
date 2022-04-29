import Link from 'next/link';
const InstructorNav = ()=> {
	
	return (
	   <div className= "navBar flex-column  mt-2">
	      <Link href="/user">
		     <a className="nav-link active">Dashboard</a>
	      </Link>
    
           <Link href="/instructor/create/course">
		     <a className="nav-link active">Create Course</a>
	      </Link>
	   
	   </div>
	   
	
	);
};
export default InstructorNav;