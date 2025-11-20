import StatCard from "../components/ui/StatCard";
import { stats } from "../data/stats";
import LineChartBox from "../components/charts/LineChartBox";
import BarChartBox from "../components/charts/BarChartBox";
import AreaChartBox from "../components/charts/AreaChartBox";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        {stats.map((item) => (
          <StatCard key={item.id} title={item.title} value={item.value} />
        ))}
      </div>

      <div className="dashboard-charts">
        <LineChartBox />
        <BarChartBox />
        <AreaChartBox />
      </div>
    </>
  );
};

export default Dashboard;
