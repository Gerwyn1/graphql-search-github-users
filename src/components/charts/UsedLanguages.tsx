import { type Repository } from "@/types";
import { calculateMostPopularLanguages } from "@/utils";

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLanguages = calculateMostPopularLanguages(repositories);
  return <div>PopularLanguages</div>;
};
export default UsedLanguages;