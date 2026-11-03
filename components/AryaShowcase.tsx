const cuts = [
  { title: "18 Years, Still Exciting", label: "Rachel · UGC", id: process.env.ARYA_RACHEL_18_YEARS },
  { title: "Secret List", label: "Campaign master", id: process.env.ARYA_SECRET_LIST },
  { title: "Fantasyland", label: "Campaign master", id: process.env.ARYA_FANTASYLAND },
  { title: "Butterflies", label: "Rachel · Alternate hook", id: process.env.ARYA_RACHEL_BUTTERFLIES },
  { title: "Warm, Warmer, Hot", label: "Campaign master", id: process.env.ARYA_WARM_WARMER_HOT },
];

const clients = [
  { slug: "arya", name: "Arya", description: "Vertical ads for Arya, from creator-led relationship stories to product walkthroughs.", cuts },
  { slug: "sawinery", name: "Sawinery", description: "Three animated holiday gift ads for woodworkers, told through a shop dog, a birthday story, and a garage game show.", cuts: [
    { title: "The Dog Knows", label: "Shop dog tells the truth", id: process.env.SAWINERY_DOG_KNOWS },
    { title: "Twenty Birthdays", label: "Twenty years of thank-yous", id: process.env.SAWINERY_TWENTY_BIRTHDAYS },
    { title: "Pop Quiz", label: "Garage game show", id: process.env.SAWINERY_POP_QUIZ },
  ] },
  { slug: "rosani", name: "Rosani", description: "Three short AI creator edits from Rosani’s hair breakage campaign.", cuts: [
    { title: "Breakage · Cut 03", label: "AI UGC · 18 sec", id: process.env.ROSANI_BREAKAGE_03 },
    { title: "Breakage · Cut 07", label: "AI UGC · 23 sec", id: process.env.ROSANI_BREAKAGE_07 },
    { title: "Breakage · Cut 11", label: "AI UGC · 18 sec", id: process.env.ROSANI_BREAKAGE_11 },
  ] },
];

export function AryaShowcase() {
  const library = process.env.PORTFOLIO_STREAM_LIBRARY_ID ?? process.env.ARYA_STREAM_LIBRARY_ID;
  const uuid = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
  if (!library || !/^\d+$/.test(library)) return null;

  const ready = clients.filter(client => client.cuts.every(cut => cut.id && uuid.test(cut.id)));
  return ready.map(client => (
    <section key={client.slug} id={client.slug} aria-labelledby={`${client.slug}-title`} className="section scroll-mt-24">
      <div className="container-page">
        <p className="eyebrow">DIRECT CLIENT WORK</p>
        <h2 id={`${client.slug}-title`} className="mt-3 text-4xl md:text-5xl">{client.name}</h2>
        <p className="mt-4 max-w-prose text-[color:var(--color-fg-muted)]">
          {client.description}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {client.cuts.map(cut => (
            <figure key={cut.title}>
              <iframe
                src={`https://iframe.mediadelivery.net/embed/${library}/${cut.id}?autoplay=false`}
                title={`${client.name} · ${cut.title}`}
                loading="lazy"
                allow="encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                className="aspect-[9/16] w-full rounded-xl border border-white/10 bg-black"
              />
              <figcaption className="mt-3">
                <span className="text-xs text-[color:var(--color-fg-muted)]">{cut.label}</span>
                <h3 className="mt-1 font-semibold">{cut.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  ));
}
