import { RouteIProps } from "./types";

import Home from "../views/home";
import About from "../views/about";
import Chart from "../views/home/chart/index";
import Bar from "../views/home/chart/bar/index";
import Radar from "../views/home/chart/radar/index";
import Message from "../views/about/message/index";
import NotFound from "../views/notFound";

const routesList: RouteIProps[] = [
  {
    key: "/",
    redirect: "/home",
  },
  {
    key: "/home",
    label: "首页",
    element: <Home />,
    children: [
      {
        key: "/chart",
        label: "图表",
        redirect: "/bar",
        children: [
          {
            key: "/bar",
            label: "柱状图",
            element: <Bar />,
          },
          {
            key: "/radar",
            label: "雷达图",
            element: <Radar />,
          },
        ],
      },
      {
        key: "/table",
        label: "表格",
        children: [
          {
            key: "/test",
            label: "表格",
            element: <Chart />,
          },
        ],
      },
    ],
  },
  {
    key: "/about",
    label: "关于",
    element: <About />,
    children: [
      {
        key: "/message",
        label: "Message",
        element: <Message />,
      },
    ],
  },
  {
    key: "/more",
    label: "更多",
    element: <About />,
  },
  {
    key: "*",
    label: "",
    element: <NotFound />,
  },
];

export default routesList;
