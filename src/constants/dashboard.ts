import type { BalanceSummary, GroupItem } from "@/components/dashboard/types";

export const MOCK_BALANCE: BalanceSummary = {
  youAreOwed: "₹3,420.50",
  youOwe: "₹645.00",
};

export const MOCK_GROUPS: GroupItem[] = [
  {
    id: "rishikesh-trip",
    title: "Rishikesh Weekend",
    subtitle: "Trip • 4 Days",
    members: [
      { id: "1", initial: "S", bgColor: "#FBCFE8", textColor: "#831843" },
      { id: "2", initial: "A", bgColor: "#FED7AA", textColor: "#7C2D12" },
      { id: "3", initial: "R", bgColor: "#E9D5FF", textColor: "#581C87" },
      { id: "4", initial: "K", bgColor: "#FEF08A", textColor: "#713F12" },
      { id: "5", initial: "N", bgColor: "#A7F3D0", textColor: "#064E3B" },
      { id: "6", initial: "V", bgColor: "#E0E7FF", textColor: "#312E81" },
    ],
    budget: {
      spent: 14280,
      total: 36000,
    },
  },
  {
    id: "flat-402",
    title: "Flat 402 Monthly",
    subtitle: "Roommates • 3 People",
    status: {
      label: "All settled",
      variant: "success",
    },
    amount: "₹0.00",
  },
  {
    id: "cyberhub-dinner",
    title: "Friday CyberHub Dinner",
    subtitle: "Outing • 5 People",
    status: {
      label: "1 pending split",
      variant: "warning",
    },
    amount: "₹840.00",
  },
];

