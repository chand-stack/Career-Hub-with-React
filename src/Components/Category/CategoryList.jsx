import { FaCalculator } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoHardwareChipSharp } from 'react-icons/io5';
const CategoryList = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 md:mx-6 lg:mx-20 gap-3'>
            <div className='bg-violet-100 p-8'>
                <h1 className='text-violet-500 text-3xl'><FaCalculator/></h1>
                <h2 className='text-xl font-extrabold'>Account & Finance</h2>
                <p className='text-gray-400'>300 Jobs Available</p>
            </div>
            <div className='bg-violet-100 p-8'>
                <h1 className='text-violet-500 text-3xl'><HiOutlineLightBulb/></h1>
                <h2 className='text-xl font-extrabold'>Creative Design</h2>
                <p className='text-gray-400'>100+ Jobs Available</p>
            </div>
            <div className='bg-violet-100 p-8'>
                <h1 className='text-violet-500 text-3xl'><FaPeopleGroup/></h1>
                <h2 className='text-xl font-extrabold'>Marketing & Sales</h2>
                <p className='text-gray-400'>150 Jobs Available</p>
            </div>
            <div className='bg-violet-100 p-8'>
                <h1 className='text-violet-500 text-3xl'><IoHardwareChipSharp/></h1>
                <h2 className='text-xl font-extrabold'>Engineering Job</h2>
                <p className='text-gray-400'>224 Jobs Available</p>
            </div>
            
        </div>
    );
};

export default CategoryList;