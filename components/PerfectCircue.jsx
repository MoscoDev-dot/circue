import { Container } from "@mui/material";
import React from "react";
import { AuroraText } from "./magicui/aurora-text";
import CircueQuestion from "./CircueQuestion";

const PerfectCircue = () => {
  return (
    <div>
      <Container maxWidth={false}>
        <p className="text-center font-black pt-30 text-6xl">
          Never feel alone again. <br />  Find that perfect <AuroraText>Circue</AuroraText>
        </p>
        <CircueQuestion/>
      </Container>
    </div>
  );
};

export default PerfectCircue;
