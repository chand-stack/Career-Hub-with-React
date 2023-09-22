import { ImLocation2 } from 'react-icons/im';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,id} = job;
    return (
        <div className="card card-compact mx-auto md:mx-0 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex gap-4">
      <button className="px-5 py-2 font-extrabold text-purple-500 border-2 border-purple-500 rounded-lg">{remote_or_onsite}</button>
      <button className="px-5 py-2 font-extrabold text-purple-500 border-2 border-purple-500 rounded-lg">{job_type}</button>
    </div>
    <div className='flex gap-2'>
      <h1 className='text-2xl flex items-center gap-1'><ImLocation2></ImLocation2> {location} </h1>
      <h1 className='text-2xl flex items-center gap-1'><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar> {salary} </h1>
    </div>
    <div className="card-actions justify-start">
      <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Job;