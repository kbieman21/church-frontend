import { type ReactNode } from 'react';
import backgroundImage from '../assets/stMichaelPicture1.jpg'; // Adjust the path as needed

interface LayoutProp {
  children:ReactNode;
};
const Layout = ({ children }:LayoutProp) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* The black overlay div you had */}
      <div className="bg-black/50 absolute inset-0" />
      
      {/* Content wrapper: needs relative positioning and z-index to appear above the overlay */}
      <div className="relative z-10">
        {children} {/* This is where your individual pages/components will be rendered */}
      </div>
    </div>
  );
};

export default Layout;
