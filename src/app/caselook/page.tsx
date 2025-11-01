import HeaderCaseLook from '@/components/caselook/HeaderCaseLook';
import MainCaseLook from '@/components/caselook/MainCaseLook';
import FooterCaseLook from '@/components/caselook/FooterCaseLook';

export default function Home() {
  return (
    <div className="h-full w-full bg-[#F8F5FF]">
      <HeaderCaseLook />
      <MainCaseLook />
      <FooterCaseLook />
    </div>
  );
}
