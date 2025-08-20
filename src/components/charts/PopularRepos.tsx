import { type Repository } from "@/types";
import { calculateMostStarredRepo } from "@/utils";

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepo(repositories)
  return <div>PopularRepos</div>;
};
export default PopularRepos;
