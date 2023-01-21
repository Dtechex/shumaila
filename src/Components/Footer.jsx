import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="text-center lg:px-5 xl:px-14 2xl:px-44   lg:text-left text-gray-600" style={{ backgroundColor: '#F2FBFF' }}>

            <div className='grid sm:grid-cols-1 block lg:hidden xl:hidden 2xl:hidden pt-5'>
                <div className='flex justify-center'>
                    <img src='/Shumailas_Logo.png' alt='d' />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 block lg:hidden xl:hidden 2xl:hidden pt-5'>
                <div className='flex justify-center'>
                    <div className="font-mundail-demibold rounded-md border border-[#e0e0e0] rounded-full bg-[#F9F9F9] py-1 px-4 text-base  text-[#6B7280] outline-none py-3">
                        <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp; Call a branch  &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-1 px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid:cols-2 gap-4 py-8">
                <div className=''>
                    <span className='block md:px-3 lg:hidden xl:hidden 2xl:hidden text-left'>
                        <span className="font-mundail-bold  flex mb-4 text-base" style={{ color: '#575757' }}>
                            Our Locations
                            <svg className="h-6 w-6 pl-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                    </span>
                    <div className="grid grid-cols-3 md:grid:cols-2 md:px-3 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4
                    ">
                        <div className='hidden lg:block xl:block 2xl:block'>
                            <span className=''>
                                <span className="font-mundail-bold flex mb-4 text-base " style={{ color: '#575757' }}>
                                    Our Locations
                                    <svg className="h-6 w-6 pl-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                            </span>


                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Upminster</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Seven Kings & Ilford</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Beehive Lane</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Gants Hill</a>
                            </p>



                            <div className="font-mundail-demibold border-[#e0e0e0] rounded-full bg-[#F9F9F9] lg:text:xs lg:px-0 py-1 px-4 text-base text-[#6B7280] outline-none px-4 py-3">
                                <span>   <FontAwesomeIcon icon={faPhone} className='fa-sm' />&nbsp;&nbsp; Call a branch  &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} className='fa-sm' /></span>
                            </div>




                        </div>
                        <div className='hidden lg:block xl:block 2xl:block'>
                            < p className="mb-2 mt-10 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Chigwell</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">East Ham</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Loughton</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Lahore</a>
                            </p>
                        </div>

                        <div className='block lg:hidden xl:hidden 2xl:hidden text-left'>

                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Upminster</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Seven Kings & Ilford</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Beehive Lane</a>
                            </p>



                        </div>
                        <div className='block lg:hidden xl:hidden 2xl:hidden text-left'>
                            <p className="mb-2  font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Gants Hill</a>
                            </p>
                            < p className="mb-2  font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Chigwell</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">East Ham</a>
                            </p>

                        </div>
                        <div className='block lg:hidden xl:hidden 2xl:hidden text-left'>

                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Loughton</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Lahore</a>
                            </p>
                        </div>

                    </div>
                </div>
                <div className=''>
                    <span className='block md:px-3 lg:hidden xl:hidden 2xl:hidden text-left'>
                        <span className="font-mundail-bold  flex mb-4 text-base" style={{ color: '#575757' }}>
                            Treatments
                        </span>
                    </span>
                    <div className="grid  md:px-3  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2  gap-4">
                        <div className='hidden lg:block xl:block 2xl:block'>
                            <h6 className=" mb-4 font-mundail-bold text-base" style={{ color: '#575757' }}>
                                Treatments
                            </h6>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">  Lashes & Brows</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Skin Tag Removal</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Lipofirm MD</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Laser Hair Removal</a>
                            </p>
                            <p className="font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Cosmelan Pigmentation Peel</a>
                            </p>

                        </div>
                        <div className='hidden lg:block xl:block 2xl:block'>
                            <p className="mb-2 mt-10 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Body Contouring</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Fat Freezing</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Waxing</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Hair loss Treatment</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Threading</a>
                            </p>
                        </div>
                        <div className='block lg:hidden xl:hidden 2xl:hidden text-left'>

                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">  Lashes & Brows</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Skin Tag Removal</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Lipofirm MD</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Laser Hair Removal</a>
                            </p>
                            <p className="font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Cosmelan Pigmentation Peel</a>
                            </p>
                        </div>
                        <div className='block lg:hidden xl:hidden 2xl:hidden text-left'>
                            <p className="mb-2  font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Body Contouring</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Fat Freezing</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Waxing</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Hair loss Treatment</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Threading</a>
                            </p>
                        </div>

                    </div>
                </div>
                <div className=''>

                    <div className='grid hidden lg:block xl:block 2xl:block  lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
                        <div className='flex justify-end'>
                            <img src='/Shumailas_Logo.png' alt='d' />
                        </div>
                    </div>
                    <span className='pt-5 block md:px-3 lg:hidden xl:hidden 2xl:hidden text-left'>
                        <span className="font-mundail-bold  flex mb-4 text-base" style={{ color: '#575757' }}>
                            Useful Links
                        </span>
                    </span>
                    <div className="md:px-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 lg:pt-10 xl:pt-10 2xl:pt-10">
                        {/* <div className='hidden lg:block xl:block 2xl:block'></div> */}

                        <div className=''>
                            <p className="mb-2 font-mundail-regular text-sm text-left  lg:text-right xl:text-right 2xl:text-right" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Complaints Procedure</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm text-left lg:text-right xl:text-right 2xl:text-right" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Privacy Policy</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm text-left lg:text-right xl:text-right 2xl:text-right" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Terms and Conditions</a>
                            </p>

                        </div>
                        <div className=''>

                            <p className="mb-2 font-mundail-regular text-sm text-left lg:text-right xl:text-right 2xl:text-right" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">About</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm text-left lg:text-right xl:text-right 2xl:text-right" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Jobs</a>
                            </p>
                            <p className="mb-2 font-mundail-regular text-sm text-left lg:text-right xl:text-right 2xl:text-right" style={{ color: '#575757' }}>
                                <a href="#!" className="text-gray-600">Contact Us</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:text-end xl:text-end 2xl:text-end p-5 lg:pr-56 xl:pr-56 2xl:pr-56 sm:w-full text-sm font-mundail-regular font-normal">
                <span style={{ color: '#A3A3A3 ' }}>© Copyright 2023. Shumailas. All Rights Reserved.</span>

            </div>
        </footer>
    );
};

export default Footer;