import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt)
    // console.log(job);

    const handleApplyJob = ()=>{
        saveJobApplication(idInt)
        toast('You Have Applied Successfully')
    }

    // console.log(id,jobs);
    return (
        <div>
            <h2>Job Details of : {id}</h2>

            <div className=" grid gap-4 md:grid-cols-4">
            <div className="boder border md:col-span-3">
                <h2 className="text-4xl">Details Coming Here</h2>
            </div>
            <div className="border ">
                <h2 className="text-3xl font-bold">Job Details</h2>
                <Link to='/applied'><button onClick={handleApplyJob} className="btn">Apply Now</button></Link>
                <ToastContainer />
            </div>
            </div>
        </div>
    );
};

export default JobDetails;