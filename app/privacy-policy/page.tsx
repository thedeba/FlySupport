import { pageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import { SITE_NAME } from "@/lib/brand";

export const metadata = pageMetadata({ title: 'Privacy Policy', description: 'Learn what information may be handled when you visit AirNexa or contact an independent provider through a listed phone number.', path: '/privacy-policy' });

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero crumbLabel="Privacy Policy" eyebrow="Legal" title="Privacy Policy" description="This policy describes information handled through the AirNexa website and what happens when you contact an independent provider." />
      <ProseSection>
        <p className="text-sm text-navy-500">Last updated: November 4, 2026</p>
        <h2 className="pt-4 text-xl font-extrabold text-navy-900">1. About this website</h2>
        <p>{SITE_NAME} is an independently operated travel affiliate and lead-generation website. The site currently has no visitor account, contact-submission form, or payment form. Its phone links ask your device to call a configured number. The website code does not include analytics tools, advertising pixels, or an advertising cookie system.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">2. Information and website requests</h2>
        <p>When you visit a website, the hosting and infrastructure services used to deliver it may process technical request information, such as an IP address, browser and device details, and pages requested, for delivery, security, and troubleshooting. The AirNexa application does not provide a form or database that collects visitor-submitted contact or travel details. The site owner should confirm the hosting provider's logs, subprocessors, and retention settings before launch.</p>
        <p>Selecting a telephone link starts a call through your device's phone service. The call may be routed or transferred to an independent provider. The website code does not implement call tracking or call recording, but the telephone carrier or provider may process caller information and call details, and a provider may record calls under its own practices. If you speak with a provider, it may ask for information such as your name, itinerary, or booking reference. Ask the provider how it collects, uses, records, and retains information before sharing details.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">3. Cookies, analytics, and advertising</h2>
        <p>The website code reviewed for this policy does not set analytics or advertising cookies and does not include analytics or advertising measurement integrations. The hosting platform, security services, or future changes to the website may use technologies outside this application. The owner should update this policy if such services are enabled.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">4. Third-party links and providers</h2>
        <p>This website may direct you to independent service providers or other third-party websites. Their privacy practices are governed by their own policies. AirNexa does not control how they collect or use information. Review the provider's privacy information before sharing personal or booking details.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">5. Retention and security</h2>
        <p>The AirNexa application has no visitor account or submission database, so it does not retain form submissions. Technical logs may be retained by the hosting or infrastructure provider according to settings not specified in this codebase. Providers you reach by phone may keep records under their own policies. No online transmission or storage method can be guaranteed completely secure.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">6. Privacy choices and requests</h2>
        <p>Depending on your location and whether a law applies, you may have rights to request access to, correction or deletion of, or a copy of personal information, or to opt out of certain uses. Which rights apply depends on the law and actual data practices. If you have a request about information AirNexa controls, use the method identified on our <Link href="/contact" className="underline underline-offset-2">Contact page</Link>. The project currently has no verified privacy email or postal address configured. The owner must provide a working privacy contact before launch. For information held by a provider you reached by phone, contact that provider directly.</p>

        <h2 className="pt-4 text-xl font-extrabold text-navy-900">7. Changes</h2>
        <p>This policy may be updated when the website or its data practices change. The date above identifies the latest revision.</p>
      </ProseSection>
    </>
  );
}
