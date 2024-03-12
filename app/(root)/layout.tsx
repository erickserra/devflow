import Navbar from '@/components/shared/navbar/Navbar';
import RightSidebar from '@/components/shared/right-sidebar/RightSidebar';
import Sidebar from '@/components/shared/sidebar/Sidebar';
import React from 'react';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="background-light850_dark100 relative w-full">
      <Navbar />
      <div>
        <Sidebar />
        <section className="min-h-[100svh] pt-[100px]">
          <div className="md:rootLayout-mainContent-md lg:rootLayout-mainContent-lg xl:rootLayout-mainContent-xl px-24 py-16 max-md:w-full md:ml-[90px] lg:ml-[266px]">
            {children}
          </div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
