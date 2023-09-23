import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { BsFillCalendar2WeekFill } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline,IoArrowBackCircleSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { setOnLS } from '../utility/localstorage';


// eslint-disable-next-line react/prop-types
const JobDetailCard = ({jobData}) => {
    const navigate = useNavigate()
    // console.log(jobData);
    // eslint-disable-next-line react/prop-types
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information,id} = jobData || {}

    // eslint-disable-next-line react/prop-types
    const {phone,email,address} = jobData.contact_information || {}
    
    const setLsHandler = id => {
        setOnLS(id)
    }

    return (
        <div className='lg:flex px-3 md:px-20 my-20'>
            <div className="w-4/6 space-y-4">
                <p><span className="font-bold">Job Description:</span> {job_description}</p>
                <p><span className="font-bold">Job Responsibility:</span> {job_responsibility}</p>
                <p><span className="font-bold">Educational Requirements:</span> <br /> {educational_requirements}</p>
                <p><span className="font-bold">Experiences:</span> <br /> {experiences}</p>

            </div>

            <div className="lg:w-2/6 bg-gray-100 p-8 rounded-xl space-y-4">
           <div className='space-y-3'>
           <h1 className="border-b-2 font-extrabold text-xl py-4">Job Details</h1>
            <p className='flex items-center gap-2'><HiOutlineCurrencyDollar className='text-xl text-violet-400'/><span className='font-semibold'>Salary:</span> {salary}(Per Month)</p>
            <p className='flex items-center gap-2'><BsFillCalendar2WeekFill className='text-xl text-violet-400'/><span className='font-semibold'>Job Title:</span> {job_title}</p>
           </div>


           <div className='space-y-3'>
           <h1 className="border-b-2 font-extrabold text-xl py-4">Contact Information</h1>
            <p className='flex items-center gap-2'><FiPhone className='text-xl text-violet-400'/><span className='font-semibold'>Phone:</span> {phone}</p>
            <p className='flex items-center gap-2'><AiOutlineMail className='text-xl text-violet-400'/><span className='font-semibold'>Email:</span> {email}</p>

            <p className='flex items-center gap-2'><IoLocationOutline className='text-xl text-violet-400'/><span className='font-semibold'>Address:</span> {address}</p>
           
           
           </div>

            <Link><button onClick={()=>setLsHandler(id)} className='btn bg-violet-500 border-none w-full my-5 text-xl font-bold text-white btn-primary'>Apply Now</button></Link>


<Link onClick={()=> navigate(-1)} className='flex items-center gap-3 lg:hidden'><IoArrowBackCircleSharp className='text-2xl text-violet-500'/>Go Back</Link>

            </div>
            
        </div>
    );
};

export default JobDetailCard;