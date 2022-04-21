import React, {useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Index = () => {
	
	const container = useRef(null)
	
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer:'svg',
			loop:true,
			autoplay: true,
			animationData: require('./office.json')
			
			
		})
	}, [])
    return (
        <>
		     <div className= "app">
			   <div id="heading"><h1>Welcome to WeGrow</h1>
			     <div id="heading2">
				 <h6>Think out of the box and create a learning experience</h6>
				
                  <div id= 'lottieContainer'>
				      <div className="container " ref = {container}></div>
			     </div>
				</div>
			   </div>
			 </div>
        </>
    );
};

export default Index;