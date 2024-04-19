import { Battery, LineChart, Settings } from "lucide-react";

export const routesNames: Record<string, string> = {
  "": "Dashboard",
  forms: "Forms",
  analytics: "Analytics",
  settings: "Settings",
};

export const navRoutes = [
  {
    title: "Forms",
    route: "/forms",
    icon: Battery,
  },
  {
    title: "Analytics",
    route: "/",
    icon: LineChart,
  },
  {
    title: "Settings",
    route: "/settings",
    icon: Settings,
    end: true,
  },
];

export const SpeciesColors: Record<string, string> = {
  human: "#D9CFCB",
  animal: "#807E5B",
  vehicle: "#AAAAA7",
};
