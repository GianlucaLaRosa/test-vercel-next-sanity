import { getLogo } from "../../../sanity/utils/content-utils";

export async function getServerSideProps() {
  const logo = await getLogo();
  return { props: { logo } };
}



export default async function Home({logo}) {

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
