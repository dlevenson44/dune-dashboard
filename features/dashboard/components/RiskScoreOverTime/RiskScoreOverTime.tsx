import { TimeSeriesData } from '~/features/dashboard/types/dashboard';
import { Card, LineChart } from "~/shared/components";

interface RiskScoreOverTimeProps {
  data: TimeSeriesData[];
}

const RiskScoreOverTime = ({ data }: RiskScoreOverTimeProps) => (
  <Card header="Risk Score Over Time">
    <LineChart
      data={data}
      xAxisProps={{
        dataKey: 'month'
      }}
      yAxisProps={{
        domain: [0, 100]
      }}
    />
  </Card>
);

export default RiskScoreOverTime;
