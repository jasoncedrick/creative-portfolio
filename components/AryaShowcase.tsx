const cuts = [
  { title: "18 Years, Still Exciting", label: "Rachel · UGC", id: "34fd1fb8-5553-425e-9390-f09ea8f1d96d" },
  { title: "Secret List", label: "Campaign master", id: "0f65dcdb-c017-4334-8f6d-1ef5710b2cd6" },
  { title: "Fantasyland", label: "Campaign master", id: "747272e5-141e-418a-b4d0-8bc1b6dae20e" },
  { title: "Butterflies", label: "Rachel · Alternate hook", id: "8a995334-b72a-4ec9-b555-c9cb4c0cab79" },
  { title: "Warm, Warmer, Hot", label: "Campaign master", id: "6775b99f-7737-4d6a-85b4-3b795a325b90" },
];

const clients = [
  { slug: "arya", name: "Arya", description: "Vertical ads for Arya, from creator-led relationship stories to product walkthroughs.", cuts },
  { slug: "sawinery", name: "Sawinery", description: "Three animated holiday gift ads for woodworkers, told through a shop dog, a birthday story, and a garage game show.", cuts: [
    { title: "The Dog Knows", label: "Shop dog tells the truth", id: "b2d4ee14-b001-4c7d-9555-9a8cb15fa17f" },
    { title: "Twenty Birthdays", label: "Twenty years of thank-yous", id: "494fa5bb-0f96-4cfa-a040-e5677333f29e" },
    { title: "Pop Quiz", label: "Garage game show", id: "f2ac7587-338e-4cfd-b29f-146fec19b945" },
  ] },
  { slug: "rosani", name: "Rosani", description: "Three short AI creator edits from Rosani’s hair breakage campaign.", cuts: [
    { title: "Breakage · Cut 03", label: "AI UGC · 18 sec", id: "dded024a-257a-4cbb-9918-6689d76ed951" },
    { title: "Breakage · Cut 07", label: "AI UGC · 23 sec", id: "ddac0e1a-7146-4ff1-895f-98a0a7e512eb" },
    { title: "Breakage · Cut 11", label: "AI UGC · 18 sec", id: "6beaf398-fdb5-46ac-89a6-5658c84b1d68" },
  ] },
];

export function AryaShowcase() {
  const library = "798402";
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
