// pages/profile.jsx
import { Header } from '../components/profile/Header';
import { Announcement } from '../components/profile/Announcement';
import { RecentlyViewed } from '../components/profile/RecentlyViewed';
import { OrderSection } from '../components/profile/OrderSection';
import { ServicesGrid } from '../components/profile/ServicesGrid';
import { BottomNav } from '../components/profile/BottomNav';
import { ShopSection } from '../components/shop/ShopSection';
import { categoryData, servicesData, recentlyViewedData } from '@/data/page';

const ProfilePage = () => {
  // Ensure categoryData is properly imported and structured
  const shopData = {
    clothing: {
      displayName: "Clothing",
      itemCount: 109,
      shops: []
    },
    shoes: {
      displayName: "Shoes",
      itemCount: 530,
      shops: []
    },
    bags: {
      displayName: "Bags",
      itemCount: 87,
      shops: []
    },
    electronics: {
      displayName: "Electronics",
      itemCount: 218,
      shops: []
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen p-5">
      <Header />
      <h1 className="font-bold text-4xl px-5">
        Hello, User
      </h1>
      <Announcement />
      <RecentlyViewed items={recentlyViewedData} />
      <OrderSection />
      <ServicesGrid services={servicesData} />
      <ShopSection categoryData={shopData} />
      <BottomNav />
    </div>
  );
};

export default ProfilePage;