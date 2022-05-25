import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
} from 'victory';

const ROAS = [
  { date: '11월 11일', value: 100 },
  { date: '11월 12일', value: 120 },
  { date: '11월 13일', value: 130 },
  { date: '11월 14일', value: 110 },
  { date: '11월 15일', value: 160 },
  { date: '11월 16일', value: 100 },
  { date: '11월 17일', value: 100 },
];

const CLICKS = [
  { date: '11월 11일', value: 90 },
  { date: '11월 12일', value: 60 },
  { date: '11월 13일', value: 70 },
  { date: '11월 14일', value: 88 },
  { date: '11월 15일', value: 96 },
  { date: '11월 16일', value: 80 },
  { date: '11월 17일', value: 81 },
];

interface FilteredData {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

interface IProps {
  filteredData: FilteredData[];
}

function TrendChart({ filteredData }: IProps) {
  const options = {
    width: 1500,
    height: 400,
    padding: {
      left: 100,
      top: 50,
      right: 100,
      bottom: 50,
    },
  };
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      {...options}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      domain={{ x: [1, 7], y: [0, 200] }}
      domainPadding={{ x: [200, 200] }}
    >
      <VictoryLine
        name="ROAS"
        style={{
          data: { stroke: '#4FADF7' },
          parent: { border: '1px solid #ccc' },
        }}
        x="date"
        y="value"
        data={ROAS}
      />
      <VictoryLine
        name="CLICKS"
        style={{
          data: { stroke: '#85DA47' },
          parent: { border: '1px solid #ccc' },
        }}
        x="date"
        y="value"
        data={CLICKS}
      />
    </VictoryChart>
  );
}

export default TrendChart;
