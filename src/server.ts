import express from "express";
import { domainCheckerHelper } from "./libs/DomainCheckerHelper";
import { serverRouter } from "./resources/server/server.routes";

const app = express();

const port = process.env.PORT || 5000;

// Middlewares ========================================

app.use(serverRouter);

const server = app.listen(port, async () => {
  console.log(`⚙️ Server running on port ${port}`);
  const ideas = domainCheckerHelper.generateDomainIdeas(
    ["dev", "tech", "developer", "programmer", "nomad"],
    ["jobs", "remotejobs", "jobsremote", "jobz", "workremote", "remotework"]
  );

  const available = await domainCheckerHelper.findAvailableDomains(ideas);

  console.log("Available Domains:");
  console.log(available);
});
