'use client';
import { useParams } from 'next/navigation';
import InsightDetails from '@/components/insights/InsightDetails';


export default function InsightDetailPage() {
  // Defensive: Next.js may provide slug as string or array
  const params = useParams();
  const slug = params && 'slug' in params && params.slug
    ? Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug
    : '';
  return <InsightDetails slug={slug} />;
}
