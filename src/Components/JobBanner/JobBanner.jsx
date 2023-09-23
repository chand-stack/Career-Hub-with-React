import bgone from '../../assets/assets/images/bg1.png'
import bgtwo from '../../assets/assets/images/bg2.png'
const JobBanner = () => {
    return (
        <div style={{backgroundImage: `url(${bgone})`,height:'40vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'left' }}>

<div style={{backgroundImage: `url(${bgtwo})`,height:'40vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
<h2 className="text-3xl font-extrabold flex justify-center items-center pt-16">Job Details</h2>
</div>

            
        </div>
    );
};

export default JobBanner;