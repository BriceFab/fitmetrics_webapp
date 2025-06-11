'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { UrlObject } from 'url';

type LocalizedLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
    href: string | UrlObject;
};

export default function LocalizedLink({
                                          href,
                                          ...props
                                      }: LocalizedLinkProps) {
    const { lang } = useParams();

    const localizedHref =
        typeof href === 'string'
            ? `/${lang}${href.startsWith('/') ? href : '/' + href}`
            : {
                ...href,
                pathname: `/${lang}${(href.pathname ?? '').startsWith('/') ? href.pathname : '/' + href.pathname}`,
            };

    return <Link href={localizedHref} {...props} />;
}
