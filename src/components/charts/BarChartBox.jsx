import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { salesData } from "../../data/sales";

const BarChartBox = () => {
  return (
    <div className="chart-card">
      <p className="chart-card__title">Weekly Sales</p>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="var(--color-primary)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
