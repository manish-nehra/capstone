import { useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from "next/router";
import {SyncOutlined} from '@ant-design/icons';
import InstructorNav from '../nav/InstructorNav';

const InstructorRoute = ({children}) => {
    return (
        <>
		   <div className ="container-fluid">
		      <div className="row">
			     <div className="col-md-2">
				 <InstructorNav/>
				 </div>
				 <div className="col-md-10">{children}</div>
			  </div>
		   </div>
              
        </>

    );
};

export default InstructorRoute;