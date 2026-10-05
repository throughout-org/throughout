const GA_ID = "G-70B910BNDJ";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// ── GA4 ──────────────────────────────────────────────────────────────────────

export function trackGA4Event(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, { send_to: GA_ID, ...params });
}

export function trackGA4PageView(path: string, title?: string) {
  trackGA4Event("page_view", { page_path: path, page_title: title ?? document.title });
}

// ── Facebook Pixel ────────────────────────────────────────────────────────────

export function trackFBEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, params);
}

export function trackFBCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("trackCustom", eventName, params);
}

// ── Conversion Events (call these at the right moments) ───────────────────────

/** Fire when user clicks a "Book a call" link */
export function trackBookCallOpen() {
  trackGA4Event("calendly_open", { event_category: "engagement", event_label: "book_call" });
  trackFBCustomEvent("CalendlyOpen");
}

/** Fire when contact form is submitted successfully */
export function trackContactFormSubmit(source?: string) {
  trackGA4Event("conversion", { send_to: `${GA_ID}/contact_form`, event_category: "conversion", event_label: "contact_form" });
  trackGA4Event("generate_lead", { event_category: "conversion", method: "contact_form", source: source ?? "contact_page" });
  trackFBEvent("Lead", { content_name: "Contact Form", content_category: source ?? "contact" });
  trackFBEvent("Contact");
}

/** Fire when newsletter signup completes */
export function trackNewsletterSignup(source?: string) {
  trackGA4Event("sign_up", { event_category: "engagement", method: "newsletter", source: source ?? "footer" });
  trackFBEvent("Lead", { content_name: "Newsletter Signup", content_category: "newsletter" });
  trackFBCustomEvent("NewsletterSignup", { source });
}

/** Fire when CTA button is clicked (not a conversion, just engagement) */
export function trackCTAClick(label: string, page?: string) {
  trackGA4Event("cta_click", { event_category: "engagement", event_label: label, page: page ?? (typeof window !== "undefined" ? window.location.pathname : "") });
  trackFBCustomEvent("CTAClick", { label, page });
}

/** Fire on service page views for funnel tracking */
export function trackServiceView(serviceName: string) {
  trackGA4Event("view_item", { event_category: "service_interest", item_name: serviceName });
  trackFBEvent("ViewContent", { content_name: serviceName, content_category: "service" });
}
