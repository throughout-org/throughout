import { permanentRedirect } from "next/navigation";

export default function TermsOfServiceRedirect() {
  permanentRedirect("/privacy-policy#terms-of-service");
}
