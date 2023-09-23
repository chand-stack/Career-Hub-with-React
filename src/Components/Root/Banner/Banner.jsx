import userImage from '../../../assets/assets/images/user.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-5'>
            <div className='space-y-3'>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium md:font-bold">One Step <br /> Closer To Your <br /> <span className="text-violet-500">Dream Job</span></h1>
                <p className="w-4/5 md:w-3/4 text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn md:font-bold md:text-xl text-white bg-violet-500">Get Started</button>
            </div>
            <img src={userImage} alt="" />
        </div>
    );
};

export default Banner;