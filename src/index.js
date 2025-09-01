import { app, port } from "./app.js";

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
