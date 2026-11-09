export type GroupMember = {
  id: string;
  initial: string;
  bgColor: string;
  textColor?: string;
};

export type GroupBudget = {
  spent: number;
  total: number;
};

export type GroupStatus = {
  label: string;
  variant: "success" | "warning" | "neutral";
};

export type GroupItem = {
  id: string;
  title: string;
  subtitle: string;
  members?: GroupMember[];
  budget?: GroupBudget;
  status?: GroupStatus;
  amount?: string;
};

export type BalanceSummary = {
  youAreOwed: string;
  youOwe: string;
  currency?: string;
};

