import { Battery, Bell, Camera, LineChart, Settings } from "lucide-react";

export const routesNames: Record<string, string> = {
  "": "Dashboard",
  battery: "Battery Monitor",
  settings: "Settings",
  data: "Data",
  camera: "Camera Feed",
  notifications: "Notifications",
  analytics: "Analytics",
};

export const navRoutes = [
  {
    title: "DashBoard",
    route: "/",
    icon: Camera,
  },
  {
    title: "Forms",
    route: "/form",
    icon: Battery,
  },
  {
    title: "Analytics",
    route: "/",
    icon: LineChart,
  },
  {
    title: "Notifications",
    route: "/",
    icon: Bell,
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
