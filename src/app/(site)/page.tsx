import { getLogo } from "../../../sanity/utils/content-utils";


export default async function Home() {
  const logo = await getLogo();
  return (
    <main>
      PIPPO
      {logo && <img src={logo.logoUrl} />}
      {logo && (
        <a href={logo.link}>
          <p>{logo.label}</p>
        </a>
      )}
      <p>TEST TEST TEST DI CAZZ</p>
    </main>
  );
}
