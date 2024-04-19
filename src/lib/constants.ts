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
    title: "Camera Feed",
    route: "/data/camera",
    icon: Camera,
  },
  {
    title: "Battery Monitor",
    route: "/battery",
    icon: Battery,
  },
  {
    title: "Analytics",
    route: "/analytics",
    icon: LineChart,
  },
  {
    title: "Notifications",
    route: "/notifications",
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
