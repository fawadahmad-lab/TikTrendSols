import React from "react";

export default function Services() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="services_1.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-blue-600  md:text-3xl">
                           Services
                        </h2>
                        <p className="mt-6 text-gray-600">
                        We pride ourselves on providing a comprehensive suite of solutions comprising of infrastructure consultancy, on/offsite services, custom software and web development, software and Mobile Application, web application Developing testing, and enterprise architecture consulting.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Our team consistently delivers state-of-the-art solutions in various areas including, but not limited to, integrated business solutions, system applications, product development, Internet/Intranet applications and communication & network management services.
                           
                        </p>
                    </div>
                </div>
            </div>
        </div>     
      <div className="container pt-5 pb-4">
        <div className="row">
          {/* Web Development */}
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
              <i className="fa fa-cogs icon-font"></i>
              </div>
              <h2 className="h-text">Business Process Automation</h2>
              <p className="p-text">
              Information technology has been enabling millions of businesses around the world to get smarter and more profitable. We welcome all businesses, small and large to consider our applications to reduce response time, costs and increase efficiency, with performance evaluation.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
              <i className="fa fa-search icon-font"></i>
              </div>
              <h2 className="h-text">SEO & Social Media</h2>
              <p className="p-text">
              We will ensure your business gets supreme visibility on the best search engines and you grab the major market share. We believe in providing you the best exclusive quality service.
              </p>
            </div>
          </div>
          {/* Android Development */}
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
              <i className="fa fa-laptop icon-font"></i>
              </div>
              <h2 className="h-text">Online Applications</h2>
              <p className="p-text">
              Forget the traditional installable software application for your network or personal computer. Embrace the new age and go for a web application for your business. Get your business status in your email as well as daily weekly reports as you demand.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
                <i className="fa fa-code icon-font-code"></i>
              </div>
              <h2 className="h-text">Web Development</h2>
              <p className="p-text">
              While there are several methods of creating websites, there is often a trade-off between simplicity and customization. We develop customized content management system to cater the demand of web management.
              </p>
            </div>
          </div>
          {/* Digital Marketing */}
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
              <i className="fa fa-laptop icon-font"></i>
              </div>
              <h2 className="h-text">Web Designing</h2>
              <i className="fa fa-laptop icon-font"></i>
              <p>
              We understand your business and classify your goals. TWO GEMS IT SOL defines and envisions your web-presence objectives and set up how users will interact with website, It should reflect your values and business philosophy with eye catching design.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
              <i className="fa fa-hotel icon-font"></i>
              </div>
              <h2 className="h-text">Hotel Management</h2>
              <p className="p-text">
              Hotels are a major employment generator in tourism industry. Our Hotel Management solution offers management of combination of various tasks e.g. accommodation, food, drink and other hotel services.
              </p>
            </div>
          </div>
          {/* E Commerce Solutions */}
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
              <i className="fa fa-users icon-font"></i>
              </div>
              <h2 className="h-text">Human Resource Management</h2>
              <p className="p-text">
              HRM devised for the management of people within your organization. The features of our HRM fall into major areas like staffing, benefits, loan, payroll, letters, performance evaluation, attendance and leave tracking.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon_box">
              <i className="fa fa-user-friends icon-font"></i>
              </div>
              <h2 className="h-text">Customer Relationship Management</h2>
              <p className="p-text">
              CRM is a strategy used to learn more about customer's needs and behaviors in order to develop stronger relationships with them. Good customer relationships are at the heart of business success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="service_banner.jpg" alt="banner" />
      </div>
  );
}
