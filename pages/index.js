import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";

export default function Home({ data }) {
  return (
    <>
      <Socials />
      <Hero />
      <Portfolio gitData={data} />
    </>
  );
}

export async function yeet() {
  const url = "https://api.github.com/users/Luchassmed/repos";
  const respons = await fetch(url);
  const resResult = respons.json;

  console.log(resResult);
  return {
    props: { data: resResult },
  };
}
