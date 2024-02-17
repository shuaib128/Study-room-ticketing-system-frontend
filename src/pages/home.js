import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import RequestQueue from "../components/HomeComponents/RequestQueue/RequestQueue";
import Queues from "../components/HomeComponents/Queues/Queues";

const Home = () => {
    return (
        <Box className="Home-page">
            <Container
                maxWidth="xl"
                sx={{
                    display: ["block", "block", "flex", "flex"],
                    justifyContent: "space-between",
                    gap: "25px",
                    mt: "25px",
                }}
            >
                <Box
                    sx={{ width: ["100%", "100%", "50%", "50%"] }}
                    className="request-queue-box"
                >
                    <RequestQueue />
                </Box>

                <Box
                    sx={{
                        width: ["100%", "100%", "50%", "50%"],
                        mt: ["20px", "20px", "0px", "0px"],
                    }}
                    className="queues-box"
                >
                    <Queues />
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
