
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src='https://tse2.mm.bing.net/th?id=OIP.V3k4wm5U44DQ2DkYhhpcCAHaEK&pid=Api&P=0&h=180' className='mb-5 w-32' alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolorum minima deserunt illum nulla sit ducimus molestiae debitis praesentium eius culpa, cumque quidem.
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <FaFacebook size={30} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-500 transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <FaTwitter size={30} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-pink-700 transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <FaInstagram size={30} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-800 transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>
                <div>
                    <p className='text-2xl font-medium mb-5 text-[#cc071e]'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <p className='text-2xl font-medium mb-5 text-[#cc071e]  '> GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 83834393</li>
                        <li>ankanpatra72@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ ankanpatra72.com - All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;

// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer className="bg-white text-black pt-12 pb-8">
//             <hr />
//             <div className="container mx-auto px-4 my-10">
//                 <div className="grid grid-cols-1  lg:grid-cols-2 ">
//                     <div className='w-3/4' >
//                         <img src="https://tse2.mm.bing.net/th?id=OIP.V3k4wm5U44DQ2DkYhhpcCAHaEK&pid=Api&P=0&h=180" className="mb-5 w-32" alt="Logo" />
//                         <p className="text-gray-600 mb-4">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius, ante in malesuada hendrerit.
//                         </p>
//                         <div className="flex space-x-4">
//                             <a href="#" className="text-gray-500 hover:text-blue-600 transition-transform duration-300 ease-in-out hover:-translate-y-2">
//                                 <FaFacebook size={30} />
//                             </a>
//                             <a href="#" className="text-gray-500 hover:text-blue-500 transition-transform duration-300 ease-in-out hover:-translate-y-2">
//                                 <FaTwitter size={30} />
//                             </a>
//                             <a href="#" className="text-gray-500 hover:text-pink-700 transition-transform duration-300 ease-in-out hover:-translate-y-2">
//                                 <FaInstagram size={30} />
//                             </a>
//                             <a href="#" className="text-gray-500 hover:text-blue-800 transition-transform duration-300 ease-in-out hover:-translate-y-2">
//                                 <FaLinkedin size={30} />
//                             </a>
//                         </div>
//                     </div>
//                     <div className='flex justify-around -mx-14 '>
//                         <div>
//                             <h3 className="text-xl font-semibold text-[#cc071e] mb-4">Quick Links</h3>
//                             <ul className="space-y-2">
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Home</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">About Us</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Services</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Products</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Contact</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-semibold mb-4 text-[#cc071e]">Our Services</h3>
//                             <ul className="space-y-2">
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Web Design</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Web Development</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">E-commerce Solutions</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Mobile App Development</a></li>
//                                 <li><a href="#" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">Digital Marketing</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-semibold mb-4 text-[#cc071e]">Contact Us</h3>
//                             <ul className="space-y-2">
//                                 <li className="flex items-center">
//                                     <FaMapMarkerAlt className="mr-2 text-gray-600" />
//                                     <span className="text-gray-600">123 Web Street, Internet City, 12345</span>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <FaPhone className="mr-2 text-gray-600" />
//                                     <a href="tel:+1234567890" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">+1 (234) 567-890</a>
//                                 </li>
//                                 <li className="flex items-center">
//                                     <FaEnvelope className="mr-2 text-gray-600" />
//                                     <a href="mailto:info@example.com" className="text-gray-600 hover:text-[#cc071e] transition-colors duration-300">info@example.com</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <hr className="my-10 border-gray-200" />
//                 <div className="flex flex-col md:flex-row justify-between items-center mt-10">
//                     <p className="text-gray-600 text-sm mb-4 md:mb-0">
//                         &copy; 2024 Your Company Name. All rights reserved.
//                     </p>
//                     <div className="flex space-x-4">
//                         <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300">Privacy Policy</a>
//                         <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300">Terms of Service</a>
//                         <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300">Cookie Policy</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

