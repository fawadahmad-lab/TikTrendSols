import React from "react";
import "./home.css"; // Ensure this path is correct based on your directory structure

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-left sm:text-right sm:ml-auto">
            <h2 className="text-4xl text-blue-600  sm:text-5xl ">
              TwoGemsIT
              <span className="hidden  sm:block text-2xl text-blue-600">Solutions</span>  
            </h2>
            <p>
              TWO GEMS IT SOLUTIONS is an innovative web designing and development company based in Islamabad, Pakistan. We are a team of committed web developers committed to serve our clients with latest online technologies.Our goal is cater to the needs of small to mide sized comnpanies and start-ups planning to establish their online presence.

              We specialise designing and developing web solutions that cater to the unique needs of your business. While delivering a project our goal is not only the feel and look but also how well it can acheive its purpose - the core of purpose of any live website.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full upper-image-container">
          <img
            className="upper-image"
            src="bg-home.png"
            alt="image1"
          />
        </div>
      </aside>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        We Deliver Best Solutions
      </h1>
      <div className="container pt-5 pb-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
                <i className="fa fa-code icon-font-code"></i>
              </div>
              <h2 className="h-text">Web Development</h2>
              <p className="p-text">
              At TWO GEMS IT SOL, provide you the best web development services
                for your business requirements. Call Us Today.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
                <i className="fa fa-android icon-font-android"></i>
              </div>
              <h2 className="h-text">Android Development</h2>
              <p className="p-text">
                At TWO GEMS IT SOL, we are providing you the best app development
                solutions, especially android and ios solutions, contact us
                today.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
                <i className="fa fa-search icon-font-search"></i>
              </div>
              <h2 className="h-text">Digital Marketing</h2>
              <p className="p-text">
              At TWO GEMS IT SOL,  you the best digital marketing services for
                your company. Get the best marketing services today.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
                <i className="fa fa-cart-plus icon-font-code"></i>
              </div>
              <h2 className="h-text">E Commerce Solutions</h2>
              <p className="p-text">
              At TWO GEMS IT SOL, We have delivered E-Commerce solutions to various companies
                across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





