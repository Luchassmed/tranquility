import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";

export default function Home({ data = [] }) {
  return (
    <main className="relative">
      <Socials />
      <Hero />
      <Portfolio repos={data} />
    </main>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`https://api.github.com/users/Luchassmed/repos`);
    
    if (!res.ok) {
      throw new Error("Failed to fetch repos");
    }
    
    const data = await res.json();

    return {
      props: { data },
      revalidate: 3600, // Revalidate every hour
    };
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return {
      props: { data: [] },
      revalidate: 60, // Retry after 1 minute on error
    };
  }
}
