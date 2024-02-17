import React from "react";
import { Box } from "@mui/material";
import Tutor from "./Tutor";
import Typography from "@mui/material/Typography";

const RequestQueue = () => {
    return (
        <Box className="request-queue" sx={{ textAlign: "left" }}>
            <Typography variant="h5" gutterBottom textAlign="left" mb="15px">
                Select a tutor to get in the queue
            </Typography>

            <Tutor
                Subject="Math"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
            />

            <Tutor
                Subject="Computer Science"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
            />

            <Tutor
                Subject="Physics"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
            />

            <Tutor
                Subject="Chemistry"
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget."
            />
        </Box>
    );
};

export default RequestQueue;
