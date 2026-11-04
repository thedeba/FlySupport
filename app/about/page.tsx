import { pageMetadata } from "@/lib/page-metadata";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";

export const metadata = pageMetadata({ title: 'About AirNexa', description: "Learn about AirNexa's independent travel affiliate and lead-generation model and how visitors may connect with participating providers.", path: '/about' });

export default function AboutPage() {
  return (
    <>
      <PageHero crumbLabel="About AirNexa" eyebrow="About" title="About AirNexa" description="An independent travel affiliate and lead-generation website that helps visitors connect with participating providers." />
      <ProseSection>
        <p>AirNexa helps travelers find ways to contact participating independent providers for travel-related assistance. The website shares general information and lets visitors call the number displayed to ask about available assistance.</p>
        <p>Depending on provider availability, topics described on this website include flight booking, flight changes, cancellations and refunds, missed flights, and last-minute travel. AirNexa does not itself operate flights or control airline decisions, provider services, prices, or availability.</p>
        <p>AirNexa may receive compensation when visitors contact, call, or are connected with participating providers. A provider is responsible for explaining its identity, services, terms, and any fees before you decide whether to proceed.</p>
        <p>AirNexa is not an airline, official airline website, airline customer-service department, travel agency, or authorized airline representative. Airline names are used only to identify the subjects discussed.</p>
      </ProseSection>
    </>
  );
}
