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
          <div className="px-16 py-8 max-sm:w-full max-sm:px-8 sm:ml-[90px] sm:w-[calc(100svw-90px)] lg:ml-[266px] lg:w-[calc(100svw-266px)] xl:w-[calc(100svw-266px-350px)]">
            {children}
          </div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
