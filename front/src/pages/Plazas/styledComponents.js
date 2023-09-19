import styled from "@emotion/styled";
import { Container as Content } from "@mui/material"; "@mui/material"

export const HeadContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.only('xs')]: {
    flexDirection: 'column',
    gap: 4
  }
}));

export const Container = styled(Content)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 12
}));


