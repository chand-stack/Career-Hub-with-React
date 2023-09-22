import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, SetAppliedJobs] = useState([])

    useEffect( () => {
        const storedJobIds = getStoredJobApplication();

        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
        SetAppliedJobs(jobsApplied)
    }
    },[])
    return (
        <div>
            <h1>Jobs I Applied {appliedJobs.length}</h1>
        </div>
    );
};

export default AppliedJobs;