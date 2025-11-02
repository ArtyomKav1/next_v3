import HeaderCaseBook from '@/components/casebook/HeaderCaseBook';
import MainCaseBook from '@/components/casebook/MainCaseBook';

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden bg-[#F8F5FF]">
      <HeaderCaseBook />

      <MainCaseBook />
    </div>
  );
}
