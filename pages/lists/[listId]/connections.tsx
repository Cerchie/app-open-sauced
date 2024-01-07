import ListPageLayout from "layouts/lists";
import ConnectionsNetwork from "components/Graphs/ConnectionsNetwork/connections-network";
import Error from "components/atoms/Error/Error";

interface ContributorListPageProps {
  list?: DBList;
  numberOfContributors: number;
  isError: boolean;
  isOwner: boolean;
}

const ListConnectionsPage = ({ list, numberOfContributors, isError, isOwner }: ContributorListPageProps) => {
  return (
    <ListPageLayout list={list} numberOfContributors={numberOfContributors} isOwner={isOwner}>
      {isError ? (
        <Error errorMessage="Unable to load list activity" />
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <span className="relative" style={{ height: "600px" }}>
            {/* adding style temporarily to be sure wrapping div has explicit height, although going against Tailwind convention see docs: 
            make sure parent container have a defined height when using
            responsive component, otherwise height will be 0 and
            no chart will be rendered.
            website examples showcase many properties,
            you'll often use just a few of them.  */}

            <ConnectionsNetwork />
          </span>
        </div>
      )}
    </ListPageLayout>
  );
};
export default ListConnectionsPage;
