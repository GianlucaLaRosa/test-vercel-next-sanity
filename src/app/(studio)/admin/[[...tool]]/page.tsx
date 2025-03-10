import { NextStudio } from "next-sanity/studio";
import config from "sanity.config";

export default function Admin() {
  return (
    <html>
      <body>
        <NextStudio config={config} />
      </body>
    </html>
  );
}
