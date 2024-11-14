import { LiquidLoader } from "../../common";
import BarLoader from "./barLoader";
import SlideLoader from "./slideLoader";
import ThreeDBoxLoader from "./threeDBoxLoader";
import PryamidLoader from "./prymidLoader";
import CubeLoader from "./cubeLoader";
import SpinnerCubeLoader from "./spinnerCubeLoader";
import BouncingBallLoader from "./bouncingBallLoader";

export const loadersList = [
  {
    title: "barLoader",
    element: <BarLoader />,
    code: {
      react: "<BarLoader />",
      css: "",
      html: "<div className='barLoader'></div>",
    },
  },
  {
    title: "slideLoader",
    element: <SlideLoader />,
    code: {
      react: "<SlideLoader />",
      css: "",
      html: "<div className='slideLoader'></div>",
    },
  },
  {
    title: "threeDBoxLoader",
    element: <ThreeDBoxLoader />,
    code: {
      react: "<ThreeDBoxLoader />",
      css: "",
      html: "<div className='threeDBoxLoader'></div>",
    },
  },
  {
    title: "pryamidLoader",
    element: <PryamidLoader />,
    code: {
      react: "<PryamidLoader />",
      css: "",
      html: "<div className='pyramidLoader'></div>",
    },
  },
  {
    title: "cubeLoader",
    element: <CubeLoader />,
    code: {
      react: "<CubeLoader />",
      css: "",
      html: "<div className='cubeLoader'></div>",
    },
  },
  {
    title: "spinnerCubeLoader",
    element: <SpinnerCubeLoader />,
    code: {
      react: "<SpinnerCubeLoader />",
      css: "",
      html: "<div className='spinnerCubeLoader'></div>",
    },
  },
  {
    title: "bouncingBallLoaderWrapper",
    element: <BouncingBallLoader />,
    code: {
      react: "<BouncingBallLoader />",
      css: "",
      html: "<div className='bouncingBallLoader'></div>",
    },
  },
  {
    title: "Liquid circle loader",
    element: <LiquidLoader />,
    code: {
      react: "<LiquidLoader />",
      css: "",
      html: "<div className='LiquidLoader'></div>",
    },
  },
];