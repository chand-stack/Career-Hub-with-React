import { GrLocation } from 'react-icons/gr';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const FeaturedJob = ({job}) => {
    // console.log(job);
    // eslint-disable-next-line react/prop-types
    const {id,logo,job_title,company_name,remote_or_onsite,
        // eslint-disable-next-line react/prop-types
        location,salary,job_type} = job;
    return (
        <div className='border p-8 space-y-3  flex flex-col'>
            <img className='w-28' src={logo} alt="" />
            <h1 className="text-2xl font-extrabold">{job_title}</h1>
            <p className="text-xl font-semibold">{company_name}</p>
            <p>
                <span className="font-semibold py-1 px-2 border-2 border-violet-500 mx-1">{remote_or_onsite}</span> 
                <span className="font-semibold py-1 px-2 border-2 border-violet-500 mx-1">{job_type}</span>
            </p>
            <div className='flex-grow'>
            <div className='flex items-center gap-2'>
                <p className='text-xl font-semibold flex gap-1 items-center'><GrLocation/> {location}</p>
                <p className='text-xl font-semibold flex gap-1 items-center'><HiOutlineCurrencyDollar/>Salary: {salary}</p>
            </div>
            </div>
                

                <div>
                <Link to={`/detail/${id}`}><button className='btn btn-primary bg-violet-500 text-white border-none'>View Details</button></Link>
                </div>
            </div>
            
    );
};

export default FeaturedJob;