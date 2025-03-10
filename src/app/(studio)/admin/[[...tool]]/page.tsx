"use client";

import { NextStudio } from "next-sanity/studio";
import config from "sanity.config";

export async function getStaticProps() {
    return {
      props: {},
      revalidate: 60,
    };
}

export default function Admin() {
  return (
    <html>
      <body>
        <NextStudio config={config} />
      </body>
    </html>
  );
}
