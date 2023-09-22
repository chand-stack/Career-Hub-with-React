import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-semibold">
          Featured Jobs {jobs.length}
        </h2>
        <p className="text-center font-semibold">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid md:grid-cols-2 container gap-6 mx-auto">
        {
            jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>

<div className={` ${dataLength === jobs.length ? 'hidden' : 'contents'}`}>
    <button onClick={()=> setDataLength(jobs.length)} className="btn">Show All Jobs</button>
</div>

    </div>
  );
};

export default FeaturedJobs;
