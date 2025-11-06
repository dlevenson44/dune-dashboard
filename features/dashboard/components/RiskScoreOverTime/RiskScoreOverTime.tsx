import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TimeSeriesData } from '~/features/dashboard/types/dashboard';
import Card from "~/shared/components/Card/Card";

interface RiskScoreOverTimeProps {
  data: TimeSeriesData[];
}

const RiskScoreOverTime = ({ data }: RiskScoreOverTimeProps) => (
  <Card header="Risk Score Over Time">

    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <defs>
          {/* SVG filter to add a yellow shadow to the line chart:
              1. feGaussianBlur: Creates a blur effect from the line's alpha channel
              2. feOffset: Shifts the blurred shadow down by 2px
              3. feFlood: Fills the shadow with yellow color (#FDE047) at 80% opacity
              4. feComposite: Combines the flood color with the offset blur
              5. feMerge: Layers the shadow behind the original line graphic */}
          <filter id="yellowShadow" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feFlood floodColor="#FDE047" floodOpacity="0.8"/>
            <feComposite in2="offsetblur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 12 }}
          stroke="#9CA3AF"
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#9CA3AF"
          axisLine={{ stroke: '#E5E7EB' }}
          domain={[0, 100]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '0.5rem',
            fontSize: '12px'
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#F59E0B"
          strokeWidth={2}
          dot={false}
          // dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
          activeDot={{ r: 5 }}
          strokeDasharray="4"
          filter="url(#yellowShadow)"
        />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default RiskScoreOverTime;
