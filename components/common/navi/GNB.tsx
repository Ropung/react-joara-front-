import Path from "@/constants/path/routes";
import CategoryNavi from "./widgets/CategoryNavi";
import MiddleNavi from "./widgets/MiddleNavi";
import TopNavi from "./widgets/TopNavi";
import { useRouter } from "next/router";

const GNB = () => {
  const router = useRouter();
  const { LOGIN, SIGNUP } = Path;

  return (
    <div className="flex flex-col justify-center items-center px-8 shadow-t-sm bg-white">
      <TopNavi />
      <p className="w-screen border-b border-gray-100" />
      <MiddleNavi />
      {router.pathname != LOGIN && router.pathname != SIGNUP && (
        <CategoryNavi />
      )}
    </div>
  );
};

export default GNB;
