import { useLoaderData } from "react-router-dom";
import { getFromLS } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import AppliedBanner from "../../AppliedBanner/AppliedBanner";
import AppliedJobsCard from "../../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState([])
    const [displayAll,setDisplayAll] = useState([])

const sortHandler = filter => {
    if(filter === 'all'){
        setDisplayAll(appliedJob)
    }else if(filter === 'remote'){
        setDisplayAll(appliedJob.filter(job => job.remote_or_onsite === 'Remote'))
    }else if(filter === 'onsite'){
        setDisplayAll(appliedJob.filter(job => job.remote_or_onsite === 'Onsite'))
    }
}

    const jobs = useLoaderData();
    const lsId = getFromLS()

    
    useEffect (() => {
        const newArr = []
    
        for(const job of lsId){
            const applJobs = jobs.filter(id => id.id === job);
            newArr.push(...applJobs)   
        }

        setAppliedJob([...appliedJob,...newArr])
        setDisplayAll([...appliedJob,...newArr])
    },[])


    return (
        <div>
            <AppliedBanner></AppliedBanner>
            <div className="space-y-7 px-2 md:px-6 lg:px-36 my-28">
            <div className="dropdown dropdown-bottom flex justify-end">
  <label tabIndex={0} className="btn m-1">Filter By</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>sortHandler('all')}><a>All</a></li>
    <li onClick={()=>sortHandler('remote')}><a>Remote</a></li>
    <li onClick={()=>sortHandler('onsite')}><a>Onsite</a></li>
  </ul>
</div>
            {
                displayAll.map(jobs => <AppliedJobsCard key={jobs.id} jobs={jobs}></AppliedJobsCard>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;