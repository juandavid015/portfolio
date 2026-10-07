import { About } from './_components/about';
import { Contact } from './_components/contact';
import { Experience } from './_components/experience';
import { Hero } from './_components/hero';

export default function HomePage() {
  return (
    <main id="main" className="flex flex-col gap-px">
      <Hero />
      <Experience index={1} />
      <About index={2} />
      <Contact index={3} />
    </main>
  );
}
