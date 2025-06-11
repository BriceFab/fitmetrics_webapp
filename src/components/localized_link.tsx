'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LocalizedLink({
  href,
  ...props
}: React.ComponentProps<typeof Link>) {
    const { lang } = useParams();

    const localizedHref = `/${lang}${href.startsWith('/') ? href : '/' + href}`;

    return <Link href={localizedHref} {...props} />;
}
