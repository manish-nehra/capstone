import axios from "axios";
import { Context } from '../../context';

import UserRoute from "../../../components/routes/UserRoute";
const InstructorIndex = () =>{
    return(
        <UserRoute>
        <h1 className="jumbotron text-center square">Instructor Dashboard</h1>
        </UserRoute>
    );
};
export default InstructorIndex;