import { useState, useEffect,  useRef} from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import lottie from 'lottie-web';
// import course from '../../server/models/course';
const Index = () => {
  const [courses, setCourses] = useState([]);

const container = useRef(null)

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await axios.get("/api/courses");
      setCourses(data);
    };
    fetchCourses();
  }, []);
useEffect(() => {
			lottie.loadAnimation({
			container: container.current,
			renderer:'svg',
			autoplay: true,
			loop:true,
			animationData: require('./office.json')
				})
	}, []);

 
  return (
    <>
     <div className= "app">
			
			     <div style={{margin:"	2rem" , marginBottom:"0rem"}}>
					 <div className='row'>
					 <div className='col-3 col-sm-1'>
					 <img src="logo2.svg" style={{width:'100px'}} />
					 </div>
					 <div className='col-3 col-sm-2'id="heading2"  >
						 <h1><span>Learn</span>Zilla</h1>
						 </div> 
						  </div>
					<div className='row' >
					<div className='col'>
					<h6>Think out of the box and create a learning experience</h6>
					
					</div>
					</div>
				</div>
         <div id= 'lottieContainer'>
				      <div className="container " ref = {container}></div>
			     </div>
			   </div>
   <hr></hr>
      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
