import { Battery, LineChart, Settings } from "lucide-react";

export const routesNames: Record<string, string> = {
  dashboard: "Dashboard",
  forms: "Forms",
  analytics: "Analytics",
  settings: "Settings",
  new: "New",
};

export const navRoutes = [
  {
    title: "Forms",
    route: "/dashboard/forms",
    icon: Battery,
  },
  {
    title: "Analytics",
    route: "/dashboard",
    icon: LineChart,
  },
  {
    title: "Settings",
    route: "/dashboard/settings",
    icon: Settings,
    end: true,
  },
];

export const SpeciesColors: Record<string, string> = {
  human: "#D9CFCB",
  animal: "#807E5B",
  vehicle: "#AAAAA7",
};
