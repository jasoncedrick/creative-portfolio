import { stack } from "@/lib/content";
import { FadeIn } from "./FadeIn";

function ToolList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
      {items.map((tool, i) => {
        const [name, ...desc] = tool.split(" — ");
        return (
          <li
            key={i}
            className="flex items-baseline gap-3 py-2.5 border-b border-[color:var(--color-border)]"
          >
            <span className="text-[14px] font-medium whitespace-nowrap">{name}</span>
            <span className="text-[12px] text-[color:var(--color-fg-faint)] font-mono leading-tight">
              {desc.join(" — ")}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function Stack() {
  return (
    <section className="py-12 md:py-16 border-t border-[color:var(--color-border)]">
      <div className="container-page">
        <div className="flex flex-col gap-4">
          <FadeIn>
            <p className="eyebrow">THE STACK</p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="text-[36px] md:text-[52px] leading-[1.05] tracking-tight max-w-[22ch]">
              AI-augmented production. Built for 2026 speed.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-16 space-y-12">
          <FadeIn delay={0.1}>
            <div>
              <p className="text-[11px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider mb-5">
                AI tools
              </p>
              <ToolList items={stack.ai} />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p className="text-[11px] font-mono text-[color:var(--color-fg-faint)] uppercase tracking-wider mb-5">
                Production &amp; scheduling
              </p>
              <ToolList items={stack.production} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}