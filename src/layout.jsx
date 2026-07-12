import React, { useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Outlet, useLocation } from "react-router-dom";

// Import placeholder fallback image (store this in your src/assets)
const placeholder = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgODAwIDYwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2YzY3NmQiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=";

function Layout() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Array of image filenames (ensure these exist in public/work/)
  const workImages = [
    'w1.jpg',
    'w2.jpg',
    'w3.jpg',
    'w4.jpg',
    'w5.jpg',
  ];

  const location = useLocation();
  
  // Only show showcase on specific routes
  const showWorkShowcase = ['/', '/home', '/work'].includes(location.pathname);

  // Helper function to handle image paths
  const getImagePath = (imageName) => {
    return `${import.meta.env.BASE_URL}work/${imageName}`;
  };

  return (
    <>
      <Header />
      <Outlet />
      
      {/* Work Showcase Section */}
      {showWorkShowcase && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">Our Client Work</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={getImagePath(image)}
                    alt={`Client project ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = placeholder;
                      e.target.onerror = null;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold">Project {index + 1}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              &times;
            </button>
            <img
              src={getImagePath(selectedImage)}
              alt="Enlarged project view"
              className="w-full max-h-[90vh] object-contain"
              onError={(e) => {
                e.target.src = placeholder;
                e.target.onerror = null;
              }}
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Layout;