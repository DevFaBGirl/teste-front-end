import React from 'react';
import styles from './PartnerBanners.module.scss';
import partnerImg from '../../assets/Partner-store.svg';

interface PartnerBannerItem {
  id: number;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
  imageAlt: string;
}

const PARTNERS: PartnerBannerItem[] = [
  {
    id: 1,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    ctaLabel: 'CONFIRA',
    ctaHref: '/parceiros',
    imageUrl: partnerImg,
    imageAlt: 'Loja parceira Apple Premium Reseller',
  },
  {
    id: 2,
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    ctaLabel: 'CONFIRA',
    ctaHref: '/parceiros',
    imageUrl: partnerImg,
    imageAlt: 'Loja parceira Apple Premium Reseller',
  },
];

export const PartnerBanners: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Banners de parceiros">
      <div className={styles.grid}>
        {PARTNERS.map((partner) => (
          <article key={partner.id} className={styles.card}>
            <img
              src={partner.imageUrl}
              alt={partner.imageAlt}
              className={styles.image}
            />
            <div className={styles.overlay} aria-hidden="true" />
            <div className={styles.content}>
              <h2 className={styles.title}>{partner.title}</h2>
              <p className={styles.description}>{partner.description}</p>
              <a
                href={partner.ctaHref}
                className={styles.cta}
                aria-label={partner.ctaLabel}
              >
                {partner.ctaLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};