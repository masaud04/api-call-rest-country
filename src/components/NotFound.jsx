import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <section className="bg-yellow-500 min-h-screen">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h2 className="text-black text-3xl font-semibold"> <span className="text-red-500">404</span> Page Not Found </h2>
                <Link to="/" className="mt-10 bg-cyan-500 py-3 px-7 rounded-xl text-xl font-bold"> Go Back </Link>
            </div>
        </section>
    );
};

export default NotFound;