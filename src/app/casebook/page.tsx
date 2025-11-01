import FooterCaseBook from '@/components/casebook/FooterCaseBook';
import HeaderCaseBook from '@/components/casebook/HeaderCaseBook';
import MainCaseBook from '@/components/casebook/MainCaseBook';

export default function Home() {
  return (
    <div className="h-full w-full bg-[#F8F5FF]">
      <HeaderCaseBook />
      <MainCaseBook />
      <FooterCaseBook />
    </div>
  );
}
