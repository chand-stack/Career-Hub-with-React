import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const Featured = () => {
    const[jobs,setJobs] = useState([])
    const[arrNum,setArrNum]= useState(4)

    useEffect(() => {
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
    },[])

    return (
        <>
        <div className="my-28 space-y-3">
        <div>
            <h1 className="font-semibold md:font-extrabold text-3xl md:text-5xl text-center">Featured Job</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mx-6 lg:mx-20 gap-3">
            {
          jobs.slice(0,arrNum).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
            }
        </div>
        </div>
        <div className="text-center mb-28">
            <button onClick={() => setArrNum(6)} className={`btn btn-primary bg-violet-500 text-white border-none ${arrNum===6 ? 'hidden' : ''}`}>See All Jobs</button>
        </div>
        </>
    );
};

export default Featured;