import { dashboardSvg } from "@/components/svgIcon/dashboardSvg";
import { presentionSvg } from "@/components/svgIcon/presentionSvg";
import { settingSvg } from "@/components/svgIcon/settingSvg";
import { smsSvg } from "@/components/svgIcon/smsSvg";
import { transactionSvg } from "@/components/svgIcon/transactionSvg";
import { userSvg } from "@/components/svgIcon/userSvg";
import { walletSvg } from "@/components/svgIcon/walletSvg";

interface SidebarLink {
  icon: (isActive: boolean) => JSX.Element;
  route: string;
  label: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    icon: (isActive: boolean) => {
      return dashboardSvg(isActive);
    },
    route: "/",
    label: "Dashboard",
  },
  {
    icon: (isActive: boolean) => {
      return transactionSvg(isActive);
    },
    route: "/transactions",
    label: "Transactions",
  },
  {
    icon: (isActive: boolean) => {
      return walletSvg(isActive);
    },
    route: "/wallets",
    label: "Wallets",
  },
  {
    icon: (isActive: boolean) => {
      return presentionSvg(isActive);
    },
    route: "/analytics",
    label: "Analytics",
  },
  {
    icon: (isActive: boolean) => {
      return userSvg(isActive);
    },
    route: "/personal",
    label: "Personal",
  },
  {
    icon: (isActive: boolean) => {
      return smsSvg(isActive);
    },
    route: "/message",
    label: "Message",
  },
  {
    icon: (isActive: boolean) => {
      return settingSvg(isActive);
    },
    route: "/settings",
    label: "Settings",
  },
];
export const cards = [
  {
    title: "Balance",
    amount: 41210,
    icon: "/assets/icons/wallet-3.svg",
  },
  {
    title: "Income",
    amount: 41210,
    icon: "/assets/icons/wallet.svg",
  },
  {
    title: "Expenses",
    amount: 41210,
    icon: "/assets/icons/card.svg",
  },
  {
    title: "Savings",
    amount: 41210,
    icon: "/assets/icons/dollar-circle.svg",
  },
];
