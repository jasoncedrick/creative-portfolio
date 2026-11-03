const cuts = [
  { title: "18 Years, Still Exciting", label: "Rachel · UGC", id: process.env.ARYA_RACHEL_18_YEARS },
  { title: "Secret List", label: "Campaign master", id: process.env.ARYA_SECRET_LIST },
  { title: "Fantasyland", label: "Campaign master", id: process.env.ARYA_FANTASYLAND },
  { title: "Butterflies", label: "Rachel · Alternate hook", id: process.env.ARYA_RACHEL_BUTTERFLIES },
  { title: "Warm, Warmer, Hot", label: "Campaign master", id: process.env.ARYA_WARM_WARMER_HOT },
];

export function AryaShowcase() {
  const library = process.env.ARYA_STREAM_LIBRARY_ID;
  const uuid = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
  if (!library || !/^\d+$/.test(library) || !cuts.every(cut => cut.id && uuid.test(cut.id))) return null;

  return (
    <section id="arya" aria-labelledby="arya-title" className="section scroll-mt-24">
      <div className="container-page">
        <p className="eyebrow">DIRECT CLIENT WORK</p>
        <h2 id="arya-title" className="mt-3 text-4xl md:text-5xl">Arya</h2>
        <p className="mt-4 max-w-prose text-[color:var(--color-fg-muted)]">
          I edited vertical ads for Arya, from creator-led relationship stories to product walkthroughs.
          These five cuts show how I adapted the opening hook, pacing, and product reveal.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cuts.map(cut => (
            <figure key={cut.title}>
              <iframe
                src={`https://iframe.mediadelivery.net/embed/${library}/${cut.id}?autoplay=false`}
                title={`Arya · ${cut.title}`}
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
  );
}
