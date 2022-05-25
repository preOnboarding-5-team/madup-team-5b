/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-props-no-spreading */
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
  VictoryTooltip,
} from 'victory';
import { MediaChannelData } from 'utils';

import { DataItem } from 'types/global.d';
import _ from 'lodash';
import { useEffect } from 'react';
import CHART_STYLE from './chartStyle';

const totalData = MediaChannelData.map((d) => {
  d.date = d.date.replaceAll('-', '');
  return d;
});

function Chart() {
  const dataStructure = [
    { value: 0, category: '광고비', total: 0 },
    { value: 0, category: '매출', total: 0 },
    { value: 0, category: '노출 수', total: 0 },
    { value: 0, category: '클릭 수', total: 0 },
    { value: 0, category: '전환 수', total: 0 },
  ];
  const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수'];

  const dataSum = {
    cost: 0,
    convValue: 0,
    imp: 0,
    click: 0,
    cvr: 0,
  };

  const data: Record<
    string,
    { value: number; category: string; total: number }[]
  > = {
    google: _.cloneDeep(dataStructure),
    facebook: _.cloneDeep(dataStructure),
    naver: _.cloneDeep(dataStructure),
    kakao: _.cloneDeep(dataStructure),
  };

  function cal() {
    totalData.forEach((d) => {
      dataSum.cost += d.cost;
      dataSum.convValue += d.convValue;
      dataSum.imp += d.imp;
      dataSum.click += d.click;
      dataSum.cvr += d.cvr;
      data[d.channel].find((item) => item.category === '광고비')!.total +=
        d.cost;
      data[d.channel].find((item) => item.category === '매출')!.total +=
        d.convValue;
      data[d.channel].find((item) => item.category === '노출 수')!.total +=
        d.imp;
      data[d.channel].find((item) => item.category === '클릭 수')!.total +=
        d.click;
      data[d.channel].find((item) => item.category === '전환 수')!.total +=
        d.cvr;
    });

    Object.entries(data).forEach(([key, values]) => {
      // eslint-disable-next-line operator-assignment

      values[0].value = (values[0].total / dataSum.cost) * 100;
      values[1].value = (values[1].total / dataSum.convValue) * 100;
      values[2].value = (values[2].total / dataSum.imp) * 100;
      values[3].value = (values[3].total / dataSum.click) * 100;
      values[4].value = (values[4].total / dataSum.cvr) * 100;
    });

    return data;
  }

  const { google, facebook, naver, kakao } = cal();
  return (
    <VictoryChart
      style={{ parent: { height: '335px' } }}
      width={960}
      domainPadding={{ x: 100 }}
    >
      <VictoryAxis
        tickValues={tickFormat}
        tickFormat={tickFormat}
        style={{
          axis: { stroke: '#EDEFF1' },
          grid: { stroke: 'transparent' },
          tickLabels: {
            fill: '#94A2AD',
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '14px',
          },
        }}
        width={960}
      />
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: 'transparent' },
          grid: { stroke: '#EDEFF1' },
          tickLabels: {
            fill: '#94A2AD',
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '14px',
          },
        }}
        tickFormat={(x) => `${x}%`}
        tickLabelComponent={
          <VictoryLabel
            verticalAnchor="start"
            textAnchor="start"
            dy={5}
            dx={8}
          />
        }
      />
      <VictoryStack colorScale={['#4fadf7', '#85da45', '#ac8af8', '#FFEB00']}>
        <VictoryBar
          data={facebook}
          {...CHART_STYLE.bar}
          labels={({ datum }) => datum.total.toLocaleString()}
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
          labels={({ datum }) => datum.total.toLocaleString()}
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
          data={google}
          {...CHART_STYLE.bar}
          labels={({ datum }) => datum.total.toLocaleString()}
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
          labels={({ datum }) => datum.total.toLocaleString()}
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
      </VictoryStack>
      <VictoryLegend
        x={560}
        y={300}
        orientation="horizontal"
        gutter={60}
        style={{
          labels: {
            fill: '#94a2ad',
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 14,
          },
        }}
        data={[
          { name: '페이스북', symbol: { fill: '#4fadf7' } },
          { name: '네이버', symbol: { fill: '#85da45' } },
          { name: '구글', symbol: { fill: '#ac8af8' } },
          { name: '카카오', symbol: { fill: '#ffeb00' } },
        ]}
      />
    </VictoryChart>
  );
}

export default Chart;
