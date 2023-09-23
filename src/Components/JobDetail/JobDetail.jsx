import { useLoaderData, useParams } from "react-router-dom";
import JobBanner from "../JobBanner/JobBanner";
import { useEffect, useState } from "react";
import JobDetailCard from "../JobDetailCard/JobDetailCard";

const JobDetail = () => {
    const [jobData,setJobData] = useState({})
    

    const jobs = useLoaderData()
    const jobId = useParams()
    

    useEffect(()=>{

        const detailJob = jobs.find(job => job.id === parseFloat(jobId.Id))
    if(detailJob){
        setJobData(detailJob)
    }

    },[jobData])
    
    // console.log(jobData);
    
    return (
        <div>
            <JobBanner></JobBanner>
            <JobDetailCard jobData={jobData}></JobDetailCard>

        </div>
    );
};

export default JobDetail;