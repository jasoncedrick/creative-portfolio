import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[70vh] flex items-center pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" aria-hidden />

        <div className="container-page relative">
          <p className="eyebrow">404 · NOT FOUND</p>
          <h1 className="mt-4 text-[56px] md:text-[88px] leading-[1.02] tracking-tight font-medium max-w-[20ch]">
            That page doesn't exist.
          </h1>
          <p className="mt-6 text-[17px] text-[color:var(--color-fg-muted)] max-w-[50ch]">
            Try the work, services, or contact sections — or head back home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn-primary">
              Back home
            </Link>
            <Link href="/#work" className="btn-secondary">
              See selected work
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
