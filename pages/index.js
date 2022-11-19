import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";

export default function Home({ data }) {
  return (
    <>
      <Socials />
      <Hero />
      <Portfolio repos={data} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/Luchassmed/repos`);
  const data = await res.json();

  return {
    props: { data },
  };
}
