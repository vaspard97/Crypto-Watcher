import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

export default function PaginationRounded() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop="1rem"
      marginBottom="1rem"
    >
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </Box>
  );
}
