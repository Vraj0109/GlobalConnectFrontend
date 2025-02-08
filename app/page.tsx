import { ChatSupport } from "./(home)/chat-support";
import { CTASection } from "./(home)/cta-section";
import { Features } from "./(home)/features";
import { HeroSection } from "./(home)/hero-section";
import { ProcessSteps } from "./(home)/process-steps";
import { Statistics } from "./(home)/statistics";
import { UniversitySearch } from "./(home)/university-search";


export default function Page() {
  return (
    <main>
      <HeroSection />
      <Features />
      <UniversitySearch />
      <ProcessSteps />
      <Statistics />
      <ChatSupport />
      <CTASection />
    </main>
  );
}
