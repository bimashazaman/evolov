import React, { useEffect } from "react";
import { Dock } from "react-dock";
import Filters from "./Filters";
import { lazy, Suspense } from "react";





const FilterPhone = () => {




  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setVisible(false)
    );
  }, []);
 


  

    
  return (
    <>
    
    
      <div className="lg:hidden p-1">
        <Dock
          position="left"
          isVisible={visible}
          fluid={true}
          size={0.8}
          onVisibleChange={(visible) => setVisible(visible)}
          zIndex={1000}
          dimStyle = {{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        >
          <div onClick={() => setVisible(!visible)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-[#221F60] flex-end items-end justify-end right-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="px-10">
            <Filters />
          </div>
        </Dock>
        <div onClick={() => setVisible(!visible)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#221F60] mt-10 ml-[10px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
      </div>
      
     
    </>
  );

};

export default FilterPhone;
