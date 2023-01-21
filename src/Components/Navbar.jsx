import React from 'react';
import { faPhone, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Navbar = (props) => {
    return (
        <div>

            <div className='bg-black p-4 text-center hidden lg:block xl:block 2xl:block'>
                <span className='text-white text-sm font-light uppercase font-mundail-demibold'>New Offers Added  Save up to 50&#37; on selected treatments. click here to redeem your offer</span>
            </div>

            <div className='grid sm:grid-cols-1 block lg:hidden xl:hidden 2xl:hidden bg-black'>
                <div className='flex justify-center'>
                    <span className='text-white text-sm font-light uppercase font-mundail-demibold'>New Offers Added  Save up to 50%</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 items-center">
                <div className='lg:hidden xl:hidden 2xl:hidden'>
                    <nav className="bg-white px-2 sm:px-4 z-20 left-0">
                        <div className="container flex flex-wrap  mx-auto">

                            <div className="flex md:order-2">

                                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg   focus:outline-none  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="items-center justify-between hidden md:hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 whitespace-nowrap">
                                    <li>
                                        <a href="#" className="font-mundail-regular block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-mundail-regular block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Treatments</a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-mundail-regular block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-mundail-regular block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Offers</a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-mundail-regular block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Find a Clinic</a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-mundail-regular block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Tips & Advice</a>
                                    </li>
                                    <li>
                                        <a href="#" className="font-mundail-regular block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className='hidden lg:block xl:block 2xl:block'>
                    <div className='px-10 flex'>

                        <img src='/whatsapp.png' alt='whatsapp' className='h-8' />


                        <span className='pl-5'>


                            <div className="font-mundail-demibold rounded-md border border-[#e0e0e0] rounded-full bg-[#F9F9F9] lg:text-xs lg:py-2  py-1 px-4 text-base  text-[#6B7280] outline-none px-10 py-3">
                                <FontAwesomeIcon icon={faPhone} className='fa-sm' />&nbsp;&nbsp; Call a branch  &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} className='fa-sm' />
                            </div>

                        </span>



                    </div>
                </div>
                <div>
                    <div className='grid justify-items-center'>
                        <img src='/navlogo.png' alt='d' />
                    </div>



                </div>
                <div className='hidden lg:block xl:block 2xl:block'>
                    <div className='flex   justify-center'>


                        <button className="bg-red-700 hover:bg-red-700 text-white font-mundail-regular lg:text-xs lg:px-4 lg:py-1 py-2 px-5 rounded-full">
                            Book Online
                        </button>

                        <div className='pl-5'>
                            <img src='star.png' alt='star' />
                            <p>400+ reviews</p>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden xl:hidden 2xl:hidden'>
                    <div className='pl-5'>
                        <img src='star.png' alt='star' className='w-6/12' />
                        <p className='text-xs font-semibold'>400+ reviews</p>
                    </div>
                </div>

            </div>


            <div className="grid place-items-center hidden lg:flex xl:flex  2xl:flex justify-center">

                <div className=''>
                    <div className="grid grid-cols-3">
                        <div>
                            <span className='text-sm font-mundail-demibold' style={{ color: '#E8B707' }}>Certified Clinicians</span>
                        </div>
                        <div>  <span className='text-sm font-mundail-demibold' style={{ color: '#6B9EE4' }}>Established Since 2011</span></div>
                        <div>   <span className='text-sm font-mundail-demibold' style={{ color: '#E8B707' }}>1400+ postive Google reviews</span></div>
                    </div>
                </div>

            </div>




            <div className='grid sm:grid-cols-1 block lg:hidden xl:hidden 2xl:hidden pt-5 flex'>
                <div className='flex justify-center font-mundail-demibold'>
                    <div className='flex items-center'> <img src='/google.png' className='w-5 h-5' /> &nbsp;&nbsp;  over 1400 reviews on Google</div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;