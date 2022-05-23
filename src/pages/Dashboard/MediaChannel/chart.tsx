/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-props-no-spreading */
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTooltip,
} from 'victory';
import { MediaChannelData } from 'utils';
import CHART_STYLE from './chartStyle';

const dataStructure = [
  { value: 0, category: '광고비' },
  { value: 0, category: '매출' },
  { value: 0, category: '노출 수' },
  { value: 0, category: '클릭 수' },
  { value: 0, category: '전환 수' },
];

const getFuck = () => {
  const Total = { cost: 0, roas: 0, imp: 0, ctr: 0, cvr: 0 };
  const data: Record<string, { value: number; category: string }[]> = {
    google: [...dataStructure],
    facebook: [...dataStructure],
    naver: [...dataStructure],
    kakao: [...dataStructure],
  };

  MediaChannelData.forEach((d) => {
    Total.cost += d.cost;
    Total.roas += d.roas;
    Total.imp += d.imp;
    Total.ctr += d.ctr;
    Total.cvr += d.cvr;
    data[d.channel].find((item) => item.category === '광고비')!.value += d.cost;
    data[d.channel].find((item) => item.category === '매출')!.value += d.roas;
    data[d.channel].find((item) => item.category === '노출 수')!.value += d.imp;
    data[d.channel].find((item) => item.category === '클릭 수')!.value += d.ctr;
    data[d.channel].find((item) => item.category === '전환 수')!.value += d.cvr;
  });
  // eslint-disable-next-line no-restricted-syntax
  for (const [name, values] of Object.entries(data)) {
    Total.cost += values[0].value;
    Total.roas += values[1].value;
    Total.imp += values[2].value;
    Total.ctr += values[3].value;
    Total.cvr += values[4].value;
  }
  console.log(Total);

  console.log((data.google[0].value / Total.cost) * 100);
  console.log((data.facebook[0].value / Total.cost) * 100);
  console.log((data.naver[0].value / Total.cost) * 100);
  console.log((data.kakao[0].value / Total.cost) * 100);

  return data;
};

const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수'];

const { google, facebook, naver, kakao } = getFuck();

function Chart() {
  return (
    <VictoryChart height={300} width={960} domainPadding={{ x: 50 }}>
      <VictoryAxis
        tickValues={tickFormat}
        tickFormat={tickFormat}
        style={{
          axis: { stroke: '#EDEFF1' },
          grid: { stroke: 'transparent' },
          tickLabels: { fill: '#94A2AD' },
        }}
        width={960}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        style={{
          axis: { stroke: 'transparent' },
          grid: { stroke: '#EDEFF1' },
          tickLabels: { fill: '#94A2AD' },
        }}
        tickFormat={(x) => `${x / 1000}%`}
      />
      <VictoryStack colorScale={['#AC8AF8', '#85DA47', '#4FADF7', '#FFEB00']}>
        <VictoryBar
          data={google}
          {...CHART_STYLE.bar}
          labelComponent={
            <VictoryTooltip
              pointerOrientation="bottom"
              flyoutWidth={100}
              flyoutHeight={30}
              pointerWidth={10}
              cornerRadius={5}
            />
          }
        />
        <VictoryBar
          data={facebook}
          {...CHART_STYLE.bar}
          labelComponent={
            <VictoryTooltip
              pointerOrientation="bottom"
              flyoutWidth={100}
              flyoutHeight={30}
              pointerWidth={10}
              cornerRadius={5}
            />
          }
        />
        <VictoryBar
          data={naver}
          {...CHART_STYLE.bar}
          labelComponent={
            <VictoryTooltip
              pointerOrientation="bottom"
              flyoutWidth={100}
              flyoutHeight={30}
              pointerWidth={10}
              cornerRadius={5}
            />
          }
        />
        <VictoryBar
          data={kakao}
          {...CHART_STYLE.bar}
          labelComponent={
            <VictoryTooltip
              pointerOrientation="bottom"
              flyoutWidth={100}
              flyoutHeight={30}
              pointerWidth={10}
              cornerRadius={5}
            />
          }
          cornerRadius={{ top: 6 }}
        />
      </VictoryStack>
    </VictoryChart>
  );
}

export default Chart;
