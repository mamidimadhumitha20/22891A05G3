import React, { useState } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import StatsPage from "./components/StatsPage";

function App() {
  const [tab, setTab] = useState(0);
  const [urls, setUrls] = useState([]);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Tabs value={tab} onChange={(e, v) => setTab(v)} centered>
        <Tab label="Shortener" />
        <Tab label="Statistics" />
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {tab === 0 && (
          <>
            <UrlForm onShortened={setUrls} />
            <UrlList urls={urls} />
          </>
        )}
        {tab === 1 && <StatsPage />}
      </Box>
    </Container>
  );
}

export default App;
