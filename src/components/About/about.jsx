import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="about_1.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-blue-600  md:text-4xl">
                          About TWO GEMS IT SOL.
                        </h2>
                        <p className="mt-6 text-gray-600">
                        TWO GEMS IT SOL is a professional web design company in Islamabad and Kahuta. We provide complete web design services to make your product to be successful in market with eye-catching outlook and appropriate web design. We also provide advance services in the field of web development, desktop applications, Internet marketing (SEO), mobile application development etc
                        </p>
                        <p className="mt-4 text-gray-600">
                        We specialize in projects that have beautiful design combined with interactive technology. We work closely with our clients from concept to delivery, helping turn their visions into their Websites. Every project we commence is given our supreme attention. We operate from Islamabad, Pakistan and strongly believe that the resources we have are best fit for small, medium or large scale projects. We seek ideas from our daily life and utilize the power of creative freedom to generate ROI for our clients.
                        </p>
                        <p className="mt-4 text-gray-600">
                        We also help companies attain cost effective outsourcing and offshore staffing solutions. If you want the best website possible that generates real results, allow us!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}