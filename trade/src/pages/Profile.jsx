
// pages/profile.jsx
import { Header } from '../components/profile/Header';
import { Announcement } from '../components/profile/Announcement';
import { RecentlyViewed } from '../components/profile/RecentlyViewed';
import { OrderSection } from '../components/profile/OrderSection';
import { ServicesGrid } from '../components/profile/ServicesGrid';
import { BottomNav } from '../components/profile/BottomNav';
import { servicesData } from '@/data/page';
import { recentlyViewedData } from '@/data/page';

const ProfilePage = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen px-5">
      <Header />
      <h className="font-bold text-4xl">
        Hello, User
      </h>
      <Announcement />

      <RecentlyViewed items={recentlyViewedData} />
      <OrderSection />
      <ServicesGrid services={servicesData} />
      <BottomNav />
    </div>
  );
};

export default ProfilePage;