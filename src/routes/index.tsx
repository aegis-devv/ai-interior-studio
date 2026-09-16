import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/studio-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Atelier Verve — Interiors Shaped by Light" },
    { name: "description", content: "Atelier Verve creates restrained residential and hospitality interiors in stone, timber and changing light." },
    { property: "og:title", content: "Atelier Verve — Interiors Shaped by Light" },
    { property: "og:description", content: "Architectural narratives sculpted through light, shadow and honest natural materials." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => setProgress(Math.min(100, Math.round((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100)));
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <>
    <section className="relative px-5 pb-20 pt-10 sm:px-10 lg:px-12 lg:pb-28">
      <div className="pointer-events-none absolute left-[45%] top-0 h-[700px] w-px -rotate-12 bg-linear-to-b from-transparent via-background to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-6 lg:pt-20">
          <div className="mb-8 flex items-center gap-4"><span className="h-px w-12 bg-primary"/><span className="text-label text-primary">Volume No. 04</span></div>
          <h1 className="font-display text-6xl font-light leading-[0.86] sm:text-8xl lg:text-[7.5rem]">Spaces that<br/><span className="relative inline-block italic text-primary">breathe<span className="absolute -right-7 -top-2 font-sans text-xs not-italic text-muted-foreground">01</span></span><br/>light</h1>
          <div className="mt-12 flex flex-col gap-9 sm:flex-row sm:items-center lg:mt-16"><p className="max-w-[310px] text-sm leading-relaxed text-muted-foreground">We compose rooms from daylight, quiet geometry and materials allowed to show their age.</p><Button asChild variant="circle" size="circle"><Link to="/work">Explore</Link></Button></div>
        </div>
        <div className="relative lg:col-span-6">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[8rem] bg-muted sm:rounded-t-[10rem]"><img src={projects[1].image} alt="Sculptural plaster staircase with brass handrail" width={1008} height={1264} fetchPriority="high" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" /></div>
          <div className="glass-panel absolute -bottom-10 left-3 z-20 hidden w-64 p-7 sm:block lg:-left-10"><span className="mb-4 block h-px w-8 bg-foreground"/><p className="font-display text-2xl italic">The Monolith</p><p className="mt-2 text-label text-muted-foreground">Residence — 2024</p></div>
          <div className="absolute -right-3 top-1/4 z-20 aspect-square w-32 overflow-hidden rounded-full border-[8px] border-background shadow-2xl sm:w-44 lg:-right-8"><img src={projects[4].image} alt="Curved limestone interior niche" width={816} height={816} loading="lazy" className="h-full w-full object-cover"/></div>
        </div>
      </div>
    </section>
    <div className="overflow-hidden border-y border-border py-3" aria-label={`Page scroll progress ${progress} percent`}><div className="animate-marquee flex w-max items-center gap-16 whitespace-nowrap text-label text-muted-foreground"><span>Scroll position {String(progress).padStart(2,"0")}%</span><span>Lisbon 38.7223° N</span><span>Section 01 / 04</span><span>Material honesty</span><span>Scroll position {String(progress).padStart(2,"0")}%</span><span>Lisbon 38.7223° N</span><span>Section 01 / 04</span><span>Material honesty</span></div></div>
    <section className="px-5 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl"><div className="mb-16 grid gap-8 md:grid-cols-2"><h2 className="font-display text-5xl font-light leading-none sm:text-7xl">Selected<br/><span className="italic">curations</span>.</h2><p className="max-w-sm self-end text-sm leading-relaxed text-muted-foreground md:justify-self-end md:text-right">Each project begins by watching the site: where light enters, what should remain rough, and where daily life needs room to gather.</p></div>
        <div className="grid gap-16 lg:grid-cols-12"><article className="lg:col-span-8"><Link to="/work" className="group block overflow-hidden bg-muted"><img src={projects[0].image} alt="Villa Ethereal living room overlooking the Aegean Sea" width={1440} height={912} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"/></Link><div className="mt-5 flex items-center gap-5 text-label"><span>Project 001</span><span className="h-px flex-1 bg-border"/><span className="text-primary">Residential</span></div></article>
          <div className="flex flex-col gap-16 lg:col-span-4 lg:pt-28">{projects.slice(2,4).map((project, i) => <article key={project.name}><Link to="/work" className={`group block overflow-hidden bg-muted ${i ? "rounded-full" : ""}`}><img src={project.image} alt={`${project.name} interior`} width={i ? 816 : 912} height={i ? 816 : 1200} loading="lazy" className={`${i ? "aspect-square" : "aspect-[3/4]"} h-full w-full object-cover transition-transform duration-700 group-hover:scale-105`}/></Link><h3 className="mt-5 font-display text-2xl italic">{project.name}</h3><p className="mt-2 text-label text-muted-foreground">{project.category}</p></article>)}</div>
        </div>
      </div>
    </section>
    <section className="bg-foreground px-5 py-24 text-background sm:px-10 lg:px-12"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12"><p className="text-label text-primary lg:col-span-3">Our approach</p><div className="lg:col-span-8"><h2 className="font-display text-4xl font-light leading-tight sm:text-6xl">Observe first. Remove what is false. Let material and use decide the rest.</h2><Button asChild variant="outline" size="wide" className="mt-10 border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"><Link to="/philosophy">Read our principles</Link></Button></div></div></section>
    <section className="px-5 py-24 sm:px-10 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="text-label text-primary">New commissions</p><h2 className="mt-5 max-w-3xl font-display text-5xl font-light leading-none sm:text-7xl">Tell us how you want to <span className="italic text-primary">live</span>.</h2></div><Button asChild variant="solid" size="wide"><Link to="/contact">Begin a conversation</Link></Button></div></section>
  </>;
}