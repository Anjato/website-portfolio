import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import HomeLab from '../components/HomeLabInfo/HomeLab'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        {<BgAnimation />}
      </Section>
      <Projects />
      <Technologies />
      <HomeLab />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

if (typeof window === 'object') {
    document.title = "Andrew's Portfolio";
}


export default Home;
