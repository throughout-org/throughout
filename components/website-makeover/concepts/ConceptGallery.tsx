import Image from "next/image";

// Fictional concepts are intentionally separate from the original pitch projects.
const concepts = [
  { name: "The Spice Export Concept", category: "Premium export website", description: "A warm, editorial direction for a spice exporter.", eyebrow: "A world of flavour", headline: "Spices with a sense of place.", body: "A considered collection, inspired by the richness of the island.", action: "Explore the collection", image: "/images/concepts/spices.jpg", background: "#292b1e", foreground: "#f6f1e6", accent: "#d3b27b", number: "01" },
  { name: "The Coir Manufacturing Concept", category: "Modern manufacturing website", description: "A natural, practical direction for a materials manufacturer.", eyebrow: "Made from nature", headline: "Useful by nature. Thoughtful by design.", body: "A closer look at the possibilities of coconut fibre.", action: "Explore the materials", image: "/images/concepts/coir.jpg", background: "#1f3730", foreground: "#f5f3e9", accent: "#b4c7a2", number: "02" },
  { name: "The Jewellery Concept", category: "Luxury jewellery website", description: "A cinematic, understated direction for a jewellery house.", eyebrow: "The art of light", headline: "A little wonder, held close.", body: "An imagined collection of colour, craft and quiet beauty.", action: "Discover the collection", image: "/images/concepts/jewellery.jpg", background: "#171b20", foreground: "#f6f2ea", accent: "#d8c09b", number: "03" },
];

type Concept = (typeof concepts)[number];

function Preview({ concept, mobile = false }: { concept: Concept; mobile?: boolean }) {
  const imageSizes = mobile ? "160px" : "(min-width: 1024px) 45vw, 100vw";

  if (concept.number === "01") {
    return <div className="relative h-full overflow-hidden bg-[#22271a] text-white" aria-hidden="true">
      <Image src={concept.image} alt="" fill sizes={imageSizes} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b2118]/90 via-[#1b2118]/55 to-transparent" />
      <div className={`absolute inset-x-0 top-0 flex items-center justify-between border-b border-white/25 ${mobile ? "px-3 py-3" : "px-[6%] py-[3%]"}`}><span className={`font-serif tracking-[.16em] ${mobile ? "text-[8px]" : "text-[clamp(9px,1.2vw,15px)]"}`}>FIELD / 01</span><span className={`${mobile ? "text-[8px]" : "text-[clamp(6px,.7vw,9px)]"} uppercase tracking-widest`}>{mobile ? "☰" : "The collection  ·  Our approach  ·  Enquire"}</span></div>
      <div className={`absolute inset-y-0 left-0 flex max-w-[68%] flex-col justify-center ${mobile ? "px-3 pt-8" : "px-[6%] pt-8"}`}><span className={`${mobile ? "text-[6px]" : "text-[clamp(6px,.7vw,9px)]"} uppercase tracking-[.2em] text-[#e0c092]`}>An island of flavour</span><span className={`mt-3 font-serif leading-[1.03] ${mobile ? "text-[17px]" : "text-[clamp(20px,3.4vw,46px)]"}`}>From the earth,<br /><i>to the world.</i></span>{!mobile && <span className="mt-4 max-w-40 text-[clamp(7px,.85vw,10px)] leading-relaxed text-white/75">A considered collection of spices and botanicals.</span>}<span className={`mt-4 self-start border-b border-[#d8bc8a] pb-1 uppercase tracking-wider ${mobile ? "text-[6px]" : "text-[clamp(6px,.7vw,9px)]"}`}>Explore the collection ↗</span></div>
      <div className={`absolute bottom-0 right-0 border-l border-t border-white/30 ${mobile ? "px-2 py-1 text-[5px]" : "px-4 py-3 text-[8px]"} uppercase tracking-widest text-white/75`}>Spices · Botanicals · Origin</div>
    </div>;
  }

  if (concept.number === "02") {
    return <div className="flex h-full flex-col overflow-hidden bg-[#edf0e8] text-[#213e32]" aria-hidden="true">
      <div className={`flex items-center justify-between border-b border-[#213e32]/20 ${mobile ? "px-3 py-3" : "px-[5%] py-[3%]"}`}><span className={`${mobile ? "text-[8px]" : "text-[clamp(9px,1.1vw,14px)]"} font-bold tracking-tight`}>FIBRE / FORM<span className="text-[#8da388]">.</span></span><span className={`${mobile ? "text-[8px]" : "text-[clamp(6px,.7vw,9px)]"} font-semibold`}>{mobile ? "☰" : "Materials     Process     Applications     ↗"}</span></div>
      <div className={`flex-1 ${mobile ? "flex flex-col" : "grid grid-cols-[1fr_1fr]"}`}>
        <div className={`flex flex-col justify-center ${mobile ? "px-3 py-3" : "px-[10%] py-[8%]"}`}><span className={`${mobile ? "text-[6px]" : "text-[clamp(6px,.7vw,9px)]"} font-semibold uppercase tracking-wider text-[#6b826d]`}>Natural materials / 01</span><span className={`mt-3 font-sans font-bold leading-[1.02] tracking-tight ${mobile ? "text-[16px]" : "text-[clamp(20px,3vw,42px)]"}`}>A better use for a natural resource.</span>{!mobile && <span className="mt-4 max-w-40 text-[clamp(7px,.85vw,10px)] leading-relaxed text-[#516b59]">Coconut fibre, reimagined for practical applications.</span>}<span className={`mt-4 self-start bg-[#213e32] text-white ${mobile ? "px-2 py-1 text-[6px]" : "px-3 py-2 text-[clamp(6px,.7vw,9px)]"}`}>View materials ↗</span></div>
        <div className={`relative ${mobile ? "min-h-0 flex-1" : "m-[5%]"}`}><Image src={concept.image} alt="" fill sizes={imageSizes} className="object-cover" /></div>
      </div><div className={`${mobile ? "px-3 py-2 text-[5px]" : "px-[5%] py-3 text-[8px]"} border-t border-[#213e32]/20 font-semibold uppercase tracking-wider`}>Fibre &nbsp; / &nbsp; Peat &nbsp; / &nbsp; Possibilities</div>
    </div>;
  }

  return (
    <div className="relative h-full overflow-hidden bg-[#101216] text-[#f6f2ea]" aria-hidden="true">
      <Image src={concept.image} alt="" fill sizes={imageSizes} className="object-cover opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      <div className={`absolute inset-x-0 top-0 flex items-center justify-between ${mobile ? "px-3 py-3" : "px-[6%] py-[3%]"}`}><span className={`${mobile ? "text-[7px]" : "text-[clamp(8px,1vw,12px)]"} font-serif tracking-[.28em]`}>ATELIER / 03</span><span className={`${mobile ? "text-[8px]" : "text-[clamp(6px,.7vw,9px)]"} uppercase tracking-widest text-white/75`}>{mobile ? "☰" : "The collection  ·  The atelier"}</span></div>
      <div className={`absolute inset-x-0 bottom-0 text-center ${mobile ? "px-2 pb-4" : "px-8 pb-[7%]"}`}><span className={`${mobile ? "text-[5px]" : "text-[clamp(6px,.7vw,9px)]"} uppercase tracking-[.25em] text-[#e3c9a3]`}>Light, form, feeling</span><span className={`mt-2 block font-serif leading-[1.05] ${mobile ? "text-[16px]" : "text-[clamp(22px,3.2vw,44px)]"}`}>A little wonder,<br /><i>held close.</i></span><span className={`mt-3 inline-block border-b border-[#d8c09b] pb-1 uppercase tracking-widest ${mobile ? "text-[5px]" : "text-[clamp(6px,.7vw,9px)]"}`}>Discover the collection</span></div>
    </div>
  );
}

export default function ConceptGallery() {
  return <section className="border-t border-hairline bg-canvas"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
    <p className="font-mono text-xs uppercase tracking-widest text-ink-2">Design concepts</p>
    <h2 className="font-display mt-5 max-w-4xl text-[clamp(2rem,4vw,3.4rem)] font-[720]">Imagine what we could build for your business.</h2>
    <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-2">Explore website design concepts created by Throughout, showcasing how thoughtful design can elevate different types of businesses.</p>
    <p className="mt-4 text-sm font-semibold text-sapphire">Illustrative design concepts — fictional businesses.</p>
    <div className="mt-12 grid gap-14">{concepts.map((concept) => <article key={concept.name} className="grid gap-6 border-t border-hairline pt-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-12">
      <div><p className="font-mono text-xs text-ink-2">{concept.number} / {concept.category}</p><h3 className="font-display mt-4 text-2xl font-[720] sm:text-3xl">{concept.name}</h3><p className="mt-3 max-w-md leading-7 text-ink-2">{concept.description}</p><p className="mt-5 text-xs font-semibold text-ink-2">Illustrative design concept — fictional business.</p></div>
      <div className="relative pr-[12%] pb-[5%]" role="img" aria-label={`${concept.name}: fictional desktop and mobile homepage design previews`}>
        <div className="overflow-hidden rounded-md border border-hairline-strong bg-canvas shadow-sm"><div className="flex h-6 items-center gap-1.5 bg-hairline px-3" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#ff5f57]"/><span className="h-2 w-2 rounded-full bg-[#febc2e]"/><span className="h-2 w-2 rounded-full bg-[#28c840]"/></div><div className="aspect-[16/10]"><Preview concept={concept} /></div></div>
        <div className="absolute bottom-0 right-0 h-[65%] w-[23%] overflow-hidden rounded-lg border-[3px] border-ink bg-ink shadow-lg"><Preview concept={concept} mobile /></div>
      </div>
    </article>)}</div>
  </div></section>;
}
