import { permanentRedirect } from "next/navigation";

// Static content; tells the Cloudflare build to cache it at the edge.
export const dynamic = "force-static";

export default function TermsOfServiceRedirect() {
  permanentRedirect("/privacy-policy#terms-of-service");
}
