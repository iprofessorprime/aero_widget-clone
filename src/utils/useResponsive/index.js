// src/utils/useResponsive.ts

import { theme, useMediaQuery, useTheme } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();
  
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  return { isXs, isSm, isMd, isLg, isXl };
};

export default useResponsive;
