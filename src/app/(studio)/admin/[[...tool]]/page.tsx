"use client";

import { NextStudio } from "next-sanity/studio";
import config from "sanity.config";

export const dynamic = 'force-static'

export default function Admin() {
  return (
    <html>
      <body>
        <NextStudio config={config} />
      </body>
    </html>
  );
}
