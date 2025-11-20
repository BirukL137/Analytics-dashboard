import StatCard from "../components/ui/StatCard";
import { stats } from "../data/stats";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-stats">
        {stats.map((item) => (
          <StatCard key={item.id} title={item.title} value={item.value} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
