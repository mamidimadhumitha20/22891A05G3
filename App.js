import React, { useState } from "react";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import StatsPage from "./components/StatsPage";
import { Container, Tabs, Tab, Box } from "@mui/material";

function App() {
  const [tab, setTab] = useState(0);
  const [shortLinks, setShortLinks] = useState([]);

  const handleNewLinks = (links) => {
    setShortLinks([...shortLinks, ...links]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
        <Tab label="SHORTENER" />
        <Tab label="STATISTICS" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {tab === 0 && (
          <>
            <UrlForm onShorten={handleNewLinks} />
            <UrlList links={shortLinks} />
          </>
        )}
        {tab === 1 && <StatsPage />}
      </Box>
    </Container>
  );
}

export default App;
