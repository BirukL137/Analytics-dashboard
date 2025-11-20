import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { growthData } from "../../data/growth";

const LineChartBox = () => {
  return (
    <div className="chart-card">
      <p className="chart-card__title">User Growth</p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={growthData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="users"
            stroke="var(--color-primary)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBox;
