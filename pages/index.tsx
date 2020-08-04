import Main from "../components/Layout/Main";
import { IMeta } from '../utils/Interfaces';

const meta: IMeta = {
    title: "Hi! Welcome to my page | Rakumairu DEV",
    description: "Hello there, I'm a Frontend Developer, you can see my work and my contact here, I also have some article that might interest you",
    url: process.env.NEXT_PUBLIC_URL
}

const Home = () => {
    return (
        <Main
            meta={meta}
        >
            <div className="relative h-screen pb-32 bg-gray-ea">
                <div className="h-full bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/static/images/splash.jpg)', filter: 'brightness(.5)' }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pb-40">
                    <div className="flex flex-col">
                        <h1 className="text-6xl text-white leading-tight">
                            Hi there!
                        </h1>
                        <h1 className="text-6xl text-white leading-tight">
                            I'm <span className="text-main">Demas</span>pira Aulia
                        </h1>
                        <div className="flex items-center">
                            <h1 className="text-6xl text-white leading-tight">
                                (aka <span className="text-main">rakumairu</span>)
                            </h1>
                            <a href="#" className="text-3xl text-white pt-4 ml-2">icon</a> {/* icon linkedin in white */}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full container left-0 right-0 flex items-stretch justify-center pb-4">
                    <div className="card bg-main-dark text-white rounded shadow-5-layer flex flex-col items-start p-4 mx-8 transition duration-200 ease-linear hover:bg-accent hover:text-black" style={{ width: '25%' }}>
                        <h5 className="text-2xl font-semibold pb-2 mb-4 border-b-2 border-white">Job Offer?</h5>
                        <p className="text-white opacity-75 mb-8">I'm currently not open for job but let's keep in touch!</p>
                        <button className="mt-auto bg-white rounded-lg px-4 py-2 text-black text-lg font-semibold shadow-4-layer outline-none focus:outline-none">Contact Me!</button>
                    </div>
                    <div className="card bg-main-dark text-white rounded shadow-5-layer flex flex-col items-start p-4 mx-8 transition duration-200 ease-linear hover:bg-accent hover:text-black" style={{ width: '25%' }}>
                        <h5 className="text-2xl font-semibold pb-2 mb-4 border-b-2 border-white">Dedicated Project?</h5>
                        <p className="text-white opacity-75 mb-8">If you have a project that you want to realize, let's discuss it together!</p>
                        <button className="mt-auto bg-white rounded-lg px-4 py-2 text-black text-lg font-semibold shadow-4-layer outline-none focus:outline-none">Hit Me Up!</button>
                    </div>
                    <div className="card bg-main-dark text-white rounded shadow-5-layer flex flex-col items-start p-4 mx-8 transition duration-200 ease-linear hover:bg-accent hover:text-black" style={{ width: '25%' }}>
                        <h5 className="text-2xl font-semibold pb-2 mb-4 border-b-2 border-white">Just Wanna be Friends?</h5>
                        <p className="text-white opacity-75 mb-8">Let's be friends and talk about all the things that we like!</p>
                        <button className="mt-auto bg-white rounded-lg px-4 py-2 text-black text-lg font-semibold shadow-4-layer outline-none focus:outline-none">DM Me!</button>
                    </div>
                </div>
            </div>
            <div className="pt-32 pb-40 bg-gray-ea clip">
                <div className="container">
                    <div className="mx-32 flex items-stretch relative shadow-5-layer">
                        <h3 className="absolute left-0 top-0 section-header text-center transform -translate-y-full mt-10 font-bold">What I do ?</h3>
                        <div className="bg-main-dark w-1/2 text-white p-10">
                            <h5 className="text-5xl leading-snug font-bold mb-16">I'm a Frontend Web Developer</h5>
                            <span className="border-b-4 border-white block mb-8" style={{ width: 64 }}></span>
                            <p className="text-opacity-25">With 1 year experience in developing website for my company and some side projects. I also have some experience in backend development (just the basic tho).</p>
                        </div>
                        <div className="bg-white flex w-1/2 p-10 pb-6 flex-col justify-between">
                            <div className="flex items-center self-start flex-wrap justify-center">
                                <a href="https://reactjs.org/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/react-logo.svg" alt="react-logo" />
                                </a>
                                <a href="https://nextjs.org/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/nextjs-logo.svg" alt="nextjs-logo" />
                                </a>
                                <a href="https://vuejs.org/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/vue-logo.png" alt="vuejs-logo" />
                                </a>
                                <a href="https://nuxtjs.org/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/nuxtjs-logo.svg" alt="nuxtjs-logo" className="p-2" />
                                </a>
                                <a href="https://laravel.com/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/laravel-logo.png" alt="laravel-logo" />
                                </a>
                                <a href="https://codeigniter.com/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/codeigniter-logo.png" alt="codeigniter-logo" />
                                </a>
                                <a href="https://flask.palletsprojects.com/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/flask-logo.png" alt="flask-logo" />
                                </a>
                                <a href="https://bottlepy.org/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/bottle-logo.png" alt="bottle-logo" className="p-2" />
                                </a>
                                <a href="https://material-ui.com/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/materialui-logo.svg" alt="materialui-logo" />
                                </a>
                                <a href="https://getbootstrap.com/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/bootstrap-logo.svg" alt="bootstrap-logo" />
                                </a>
                                <a href="https://tailwindcss.com/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/tailwindcss-logo.svg" alt="tailwindcss-logo" />
                                </a>
                                <a href="https://bulma.io/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/bulma-logo.png" alt="bulma-logo" className="p-2" />
                                </a>
                                <a href="https://www.mysql.com/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/mysql-logo.svg" alt="mysql-logo" />
                                </a>
                                <a href="https://www.postgresql.org/" target="__blank" className="brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150">
                                    <img src="/static/icons/postgresql-logo.png" alt="postgresql-logo" />
                                </a>
                            </div>
                            <p className="text-xs text-black-48">*Most used: reactjs, next js, laravel, tailwindcss, material-ui, mysql</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-32 pb-40 bg-white">
                <div className="container">
                    <div className="mx-32 flex items-stretch relative shadow-5-layer">
                        <h3 className="absolute left-0 top-0 section-header text-center transform -translate-y-full mt-10 font-bold">Projects .</h3>
                        <div className="bg-accent w-1/2 text-white p-10">
                            <h5 className="text-5xl leading-snug font-bold mb-16">My Past / Recent Projects</h5>
                            <span className="border-b-4 border-white block mb-8" style={{ width: 64 }}></span>
                            <p className="text-opacity-25">Some of my notable projects since my college year, including my final projects for graduation.</p>
                        </div>
                        <div className="bg-white flex w-1/2 p-10 flex-col justify-center items-center">
                            <p className="text-lg text-black-48">Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-32 bg-white">
                <div className="container">
                    <div className="mx-32">
                        <h3 className="font-bold section-header text-black mb-10">Experience .</h3>
                        <div className="w-full flex flex-col">
                            <div className="flex timeline">
                                <div className="w-1/2 flex justify-end">
                                    <div className="w-auto flex items-center justify-center px-8 section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-main hover:text-opacity-100 cursor-default">
                                        2018
                                    </div>
                                    <div className="w-8 h-full bg-main flex flex-col items-center justify-center text-lg text-white font-bold leading-none px-2 py-8 text-center">
                                        ~
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-start">
                                    <div className="h-full bg-white flex flex-col text-lg px-2 py-8 justify-center">
                                        <h5 className="text-xl font-semibold text-main">Process Mining Research</h5>
                                        <p className="mb-4 text-black-48">Contribute in my lecturer's research as Fullstack Developer about process mining.</p>
                                        <h5 className="text-xl font-semibold text-main">Aid Other Final Project</h5>
                                        <p className="mb-4 text-black-48">Develop an app for warehouse administration for a Civil Engineering student.</p>
                                        <h5 className="text-xl font-semibold text-main">Started My Final Project</h5>
                                        <p className="text-black-48">Started my Final Project for graduation about process mining which use Angular for the frontend and using Flask for the backend and calculation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 flex justify-start order-2">
                                    <div className="w-8 h-full bg-accent flex flex-col items-center justify-center text-lg text-white font-bold leading-none px-2 py-8 text-center">
                                        ~
                                    </div>
                                    <div className="w-auto flex items-center justify-center px-8 section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-accent hover:text-opacity-100 cursor-default">
                                        2019
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end order-1">
                                    <div className="h-full bg-white flex flex-col text-lg px-2 py-8 text-right justify-center">
                                        <h5 className="text-xl font-semibold text-accent">Finish My Final Project</h5>
                                        <p className="mb-4 text-black-48">Finishes my final project for graduation and publish the results as a journal article in <a className="text-accent hover:text-accent-dark" href="http://journals.ums.ac.id/index.php/khif">KHIF</a>, and here is the link to <a className="text-accent hover:text-accent-dark" href="https://www.researchgate.net/publication/339382239_The_Design_of_Exploratory_Application_and_Preprocessing_of_Event_Log_Data_in_LMS_Moodle-Based_Online_Learning_Activities_for_Process_Mining">My Article</a>.</p>
                                        <h5 className="text-xl font-semibold text-accent">Fraud Detection Research</h5>
                                        <p className="mb-4 text-black-48">Contribute in my lecturer's research as Frontend Developer about fraud detection using Isolation Forest Algorithm.</p>
                                        <h5 className="text-xl font-semibold text-accent mb-4">Graduated College!!!</h5>
                                        <h5 className="text-xl font-semibold text-accent">First Full-time Work</h5>
                                        <p className="text-black-48">I join Emporia Digital as Frontend Developer, we're using Laravel and Lumen here.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 flex justify-end">
                                    <div className="w-auto flex items-center justify-center px-8 section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-main hover:text-opacity-100 cursor-default">
                                        2020
                                    </div>
                                    <div className="w-8 h-full bg-main flex flex-col items-center justify-center text-lg text-white font-bold leading-none px-2 py-8 text-center">
                                        ~
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-start">
                                    <div className="h-full bg-white flex flex-col text-lg px-2 py-8 justify-center">
                                        <h5 className="text-xl font-semibold text-main">Mutated to Child Company</h5>
                                        <p className="mb-4 text-black-48">Got mutated to other child company as fullstack developer and network engineering.</p>
                                        <h5 className="text-xl font-semibold text-main">Join Jendela360</h5>
                                        <p className="mb-4 text-black-48">Join <a className="text-main hover:text-main-dark" href="https://jendela360.com/">Jendela360</a> as Frontend Developer, we're using React and NextJs here.</p>
                                        <h5 className="text-xl font-semibold text-main">Create My First Portfolio Page!!!</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/2 flex justify-start order-2">
                                    <div className="w-8 h-full bg-accent flex flex-col items-center justify-center text-lg text-white font-bold leading-none px-2 py-8 text-center">
                                        .<br/>.<br/>.
                                    </div>
                                    <div className="w-auto flex items-center justify-center px-8 section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-accent hover:text-opacity-100 cursor-default">
                                        2021
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end order-1">
                                    <div className="h-full bg-white flex flex-col text-lg px-2 py-8 text-right justify-center">
                                        <h5 className="text-xl font-semibold text-accent">Let's see where I'll go next!</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}
    
export default Home