import React from "react";



const Footer = lazy(() => import('./Footer'));
const Example = lazy(() => import('./Navbar'));

import { lazy, Suspense } from "react";

function layout({ children }) {
  return (
    <>
     <div>
     <Suspense fallback={<div>Loading...</div>}>
      <Example />
      <main>{children}</main>
      <Footer />
      </Suspense>
     </div>
    </>
  );
}

export default layout;
