const tech = [
  ["nextjs", "Next.js"], ["react", "React"], ["nodejs", "Node.js"], ["nestjs", "NestJS"], ["javascript", "JavaScript"],
  ["python", "Python"], ["php", "PHP"], ["laravel", "Laravel"], ["graphql", "GraphQL"], ["tailwind", "Tailwind CSS"],
  ["postgresql", "PostgreSQL"], ["mysql", "MySQL"], ["mongodb", "MongoDB"], ["redis", "Redis"], ["aws", "AWS"],
  ["gcp", "Google Cloud"], ["docker", "Docker"], ["kubernetes", "Kubernetes"], ["terraform", "Terraform"], ["jenkins", "Jenkins"],
  ["git", "Git"], ["linux", "Linux"], ["openai", "OpenAI"], ["langchain", "LangChain"], ["huggingface", "Hugging Face"],
  ["pytorch", "PyTorch"], ["pinecone", "Pinecone"], ["shopify", "Shopify"], ["liquid", "Liquid"], ["woocommerce", "WooCommerce"],
  ["wordpress", "WordPress"], ["stripe", "Stripe"], ["payhere", "PayHere"], ["figma", "Figma"], ["sketch", "Sketch"],
  ["zeplin", "Zeplin"], ["storybook", "Storybook"], ["gsc", "Google Search Console"],
] as const;

// Greyscale and slow; a logo shows its own colours on hover. Pauses on hover, stops for reduced motion.
export default function TechMarquee() {
  return (
    <div className="flex items-center gap-6">
      <p className="shrink-0 font-mono text-xs text-ink-2">Built with</p>
      <div className="marquee relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) =>
            tech.map(([file, name]) => (
              <li key={`${copy}-${file}`} aria-hidden={copy === 1 ? true : undefined} title={name} className="shrink-0 pr-9">
                {/* eslint-disable-next-line @next/next/no-img-element -- small static SVGs, nothing to optimise */}
                <img
                  src={`/images/tech/${file}.svg`}
                  alt={copy === 1 ? "" : name}
                  loading="lazy"
                  className="h-5 w-auto max-w-24 opacity-60 brightness-50 grayscale transition duration-300 hover:opacity-100 hover:brightness-100 hover:grayscale-0"
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </div>
  );
}
