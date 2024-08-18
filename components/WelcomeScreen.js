import { Grid,Paper, Typography } from "@mui/material";
import React from "react";
const WelcomeScreen = () =>{
	return(
		<Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h5">Welcome to Your App!</Typography>
        </Paper>
      </Grid>
      {/* Add more Grid items for additional components */}
    </Grid>
	)
}
export default WelcomeScreen;