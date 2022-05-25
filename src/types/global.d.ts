export interface DataItem {
  channel: string;
  date: string;
  imp: number;
  click: number;
  cost: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
}

export interface ITotalData extends DataItem {
  sales: number;
}

export interface trendItem {
  name: string;
  color: string;
}

export interface IDropdownList {
  type: string;
  selected: string;
  setSelected: SetterOrUpdater<>;
  list: string[] | trendItem[];
  setList?: SetterOrUpdater<>;
  itemAdder: boolean;
  isOpen: boolean;
  toggleList: () => void;
}
