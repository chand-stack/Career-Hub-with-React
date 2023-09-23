import CategoryList from "./CategoryList";


const Category = () => {
    return (
        <div className="my-28 space-y-3">
            <h1 className="font-semibold md:font-extrabold text-3xl md:text-5xl text-center">Job Category List</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <CategoryList/>
            
        </div>
    );
};

export default Category;