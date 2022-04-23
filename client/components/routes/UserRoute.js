import { useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from "next/router";
import {SyncOutlined} from '@ant-design/icons';
import UserNav from '../../components/nav/UserNav';
const UserRoute = ({children}) => {
      // state
  const [ok, setOk] = useState(false);
   return (
       <>
      {ok ? ( <SyncOutlined spin className="d-flex justify-content-center display-1 text-primary p-5"/>
		   ) : (
		   <div className ="container-fluid">
		      <div className="row">
			     <div className="col-md-2">
				 <UserNav/>
				 </div>
				 <div className="col-md-10">{children}</div>
			  </div>
		   </div>
              )};
        </>

    );
};

export default UserRoute;