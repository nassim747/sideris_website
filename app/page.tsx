import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const TEAM_MEMBERS = [
  { name: "Diego Vachon Galindo", role: "Co-Founder", bio: "Mathematics & Computer Science at McGill University. Focused on software, data, and the development of the Sideris Terra platform.", photoUrl: "/founder-1.jpg", linkedinUrl: "https://www.linkedin.com/in/diego-vachon-galindo-263b66234/" },
  { name: "Nassim Ameur", role: "Co-Founder", bio: "Mathematics & Computer Science at McGill University, with a minor in Economics. Focused on product development, technology, partnerships, and business strategy at Sideris Terra.", photoUrl: "/founder-2.jpg", linkedinUrl: "https://www.linkedin.com/in/ameurnassim/" },
];

const primaryButton = "inline-flex h-11 items-center justify-center gap-2 border border-primary bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-transparent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Home() {
  return <main id="top" className="min-h-screen overflow-hidden bg-background">
    <SiteHeader />
    <section className="hero-section"><div className="site-width hero-grid"><div className="hero-copy"><h1>See crop stress before it becomes a problem.</h1><p className="hero-lede">Sideris is a parcel-level crop monitoring platform that brings satellite observations, weather, crop development, and soil water balance into one clearer view.</p></div><figure className="hero-image"><img src="/contoured-agricultural-landscape-stockcake.jpg" alt="Contoured agricultural fields seen from above" /><figcaption>Field conditions, read in context.</figcaption></figure></div></section>
    <section id="technology" className="platform-section content-section scroll-mt-20"><div className="site-width"><div className="section-intro"><div><h2>The platform</h2><p className="section-lede">Our prototype brings the signals together in a single parcel-level view, giving teams a more direct way to understand crop conditions over time.</p></div></div><figure className="prototype-figure"><img src="/prototype%20image.png" alt="Sideris Terra crop monitoring prototype" /><figcaption>Prototype interface / parcel-level crop monitoring</figcaption></figure></div></section>
    <section id="about" className="approach-section content-section content-section-tight scroll-mt-20"><div className="site-width split-section"><div><h2>Our approach</h2><hr /><p className="section-lede">Agricultural decisions are often based on information coming from separate sources. Sideris Terra is being developed to combine these signals into a single parcel-level view, making it easier to understand where crop stress may be developing and where attention may be needed.</p></div></div></section>
    <section id="team" className="founders-section content-section scroll-mt-20"><div className="site-width"><div className="section-intro"><div><h2>Founders</h2></div></div><div className="team-list">{TEAM_MEMBERS.map((member) => <article key={member.name} className="team-member"><img src={member.photoUrl} alt={`${member.name}, ${member.role}`} /><div className="team-details"><div><h3>{member.name}</h3><p className="team-role">{member.role}</p></div><a href={member.linkedinUrl} target="_blank" rel="noreferrer" className="linkedin-mark" aria-label={`${member.name} on LinkedIn`}>in</a><p className="team-bio">{member.bio}</p></div></article>)}</div></div></section>
    <section className="home-contact"><div className="site-width home-contact-inner"><p>Interested in working with us?</p><a href="/contact" className={primaryButton}>Contact us <ArrowRight size={16} aria-hidden="true" /></a></div></section>
    <SiteFooter />
  </main>;
}