const CHART_STYLE = {
  width: 1000,
  height: 350,
  animate: {
    duration: 2000,
    onLoad: {
      duration: 1000,
    },
  },
};

const TOOLTIP_STYLE = {
  flyoutWidth: 100,
  flyoutHeight: 40,
  pointerLength: 10,
  cornerRadius: 5,
  flyoutStyle: {
    fill: 'white',
  },
};

const AXIS_UNDER_STYLE = {
  style: {
    axis: { stroke: '#EDEFF1' },
    grid: { stroke: 'transparent' },
    tickLabels: { fill: '#94A2AD' },
  },
};

export { CHART_STYLE, TOOLTIP_STYLE, AXIS_UNDER_STYLE };
