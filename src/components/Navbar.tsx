import { Box, Stack, Typography } from "@mui/material";
import APP_LOGO from "../assets/todo-icon.png";

const Navbar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Box>
          <img src={APP_LOGO} width={100} />
        </Box>
        <Typography variant="h3">To Do App</Typography>
      </Stack>
    </Box>
  );
};

export default Navbar;
