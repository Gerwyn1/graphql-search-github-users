import { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";

function ForkedRepos({ repositories }: { repositories: Repository[] }) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);


  return <div>ForkedRepos</div>;
}
export default ForkedRepos;
