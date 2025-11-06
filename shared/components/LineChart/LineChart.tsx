import {
  LineChart as RechartsLineChart,
  Line,
  LineProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  ResponsiveContainer
} from 'recharts';
import LineShadow from './LineShadow';


interface LineChartProps<T> {
  data: T[];
  lineProps?: LineProps;
  tooltipProps?: TooltipProps;
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps;
}

const LineChart = <T,>({
  data,
  lineProps,
  tooltipProps,
  xAxisProps,
  yAxisProps,
}: LineChartProps<T>) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <LineShadow />
        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
        <XAxis
          tick={{ fontSize: 12 }}
          stroke="#9CA3AF"
          axisLine={{ stroke: '#E5E7EB' }}
          {...xAxisProps}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#9CA3AF"
          axisLine={{ stroke: '#E5E7EB' }}
          {...yAxisProps}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '0.5rem',
            fontSize: '12px'
          }}
          {...tooltipProps}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#F59E0B"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 5 }}
          strokeDasharray="4"
          filter="url(#yellowShadow)"
          {...lineProps}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
