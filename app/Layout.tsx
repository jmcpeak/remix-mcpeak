import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import ProTip from "./ProTip";
import Copyright from "./Copyright";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        {children}
        <ProTip />
        <Copyright />
        <Button variant="contained" color="secondary">
          Hi there
        </Button>
      </Box>
    </Container>
  );
}
