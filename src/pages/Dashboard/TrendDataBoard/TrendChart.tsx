import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import { CHART_STYLE, TOOLTIP_STYLE, AXIS_UNDER_STYLE } from './chartStyle';

export interface FilteredData {
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

const checkItem = ['roas', 'click'];

const makeTrendArray = (item: FilteredData[]) => {
  const data: Record<string, { value: number; date: string }[]> = {
    imp: [],
    click: [],
    cost: [],
    conv: [],
    convValue: [],
    ctr: [],
    cvr: [],
    cpc: [],
    cpa: [],
    roas: [],
  };

  item.forEach((d) => {
    data.imp.push({ date: d.date, value: d.imp });
    data.click.push({ date: d.date, value: d.click });
    data.cost.push({ date: d.date, value: d.cost });
    data.conv.push({ date: d.date, value: d.conv });
    data.convValue.push({ date: d.date, value: d.convValue });
    data.ctr.push({ date: d.date, value: d.ctr });
    data.cvr.push({ date: d.date, value: d.cvr });
    data.cpc.push({ date: d.date, value: d.cpc });
    data.cpa.push({ date: d.date, value: d.cpa });
    data.roas.push({ date: d.date, value: d.roas });
  });
  return data;
};

const unit = (item: string) => {
  if (item === 'roas') return '%';
  if (item === 'click') return '번';
  return '';
};

function TrendChart({ filteredData }: IProps) {
  const kk = makeTrendArray(filteredData);

  const xOffsets = [100, 900];
  const tickPadding = [0, -20];
  const anchors = ['end', 'start'];
  const colors = ['green', 'blue'];

  // 수정해야 함
  const test = 'click';
  const chosenDatas = [kk.roas];
  if (test === 'click') chosenDatas.push(kk[test]);

  const maxima = chosenDatas.map((dataset) =>
    Math.max(...dataset.map((d) => d.value))
  );
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      {...CHART_STYLE}
      domainPadding={{ x: 50 }}
      containerComponent={
        <VictoryVoronoiContainer
          labels={(d) => `${d.datum.value}`}
          labelComponent={<VictoryTooltip {...TOOLTIP_STYLE} />}
        />
      }
    >
      <VictoryAxis {...AXIS_UNDER_STYLE} />
      {chosenDatas.map((d, i) => {
        const key = `leftAxis_${i}`;
        return (
          <VictoryAxis
            dependentAxis
            key={key}
            offsetX={xOffsets[i]}
            style={{
              ticks: { padding: tickPadding[i], stroke: 'transparent' },
              tickLabels: { fill: 'gray', textAnchor: anchors[i] },
              axis: { stroke: 'transparent' },
              grid: { stroke: '#EDEFF1' },
            }}
            tickFormat={(t) =>
              `${Math.floor(t * maxima[i])}${unit(checkItem[i])}`
            }
          />
        );
      })}
      {chosenDatas.map((d, i) => {
        const key = `leftLine_${i}`;
        return (
          <VictoryLine
            key={key}
            data={d}
            style={{ data: { stroke: colors[i] } }}
            x={(datum) =>
              `${datum.date.split('-')[1]}월 ${datum.date.split('-')[2]}일`
            }
            y={(datum) => datum.value / maxima[i]}
          />
        );
      })}
    </VictoryChart>
  );
}

export default TrendChart;
