import { ResponsiveNetwork } from "@nivo/network";
import { nodes, links } from "./connections-data.json";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const ConnectionsNetwork = ({ data = { nodes, links } }) => (
  <ResponsiveNetwork
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    linkDistance={100}
    centeringStrength={0.3}
    repulsivity={6}
    nodeSize={25}
    activeNodeSize={18}
    nodeColor={"#F77216"}
    nodeBorderWidth={2}
    nodeBorderColor={{
      from: "color",
      modifiers: [["darker", 0.8]],
    }}
    linkThickness={1}
    linkBlendMode="multiply"
    motionConfig="wobbly"
  />
);

export default ConnectionsNetwork;
