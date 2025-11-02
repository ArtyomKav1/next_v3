
import VerificationService from './VerificationService';
import RecommendProduct from './RecommendProduct';
import CasebookHelps from './CasebookHelps';
import EasyRecommendation from './EasyRecommendation';
import CasebookRates from './CasebookRates';
import PleasureWork from './PleasureWork';

export default function MainCaseBook() {
  return (
    <div className="h-full w-full bg-[#F6FAFF]">
      <VerificationService />
      <RecommendProduct />
      <CasebookHelps />
      <EasyRecommendation />
      <PleasureWork />
      <CasebookRates />
    </div>
  );
}
