export const FIRM_NAME = 'Free Demat A/C Services';
export const OPEN_DEMAT_LINK =
  'https://trade.angelone.in/?rne_source=B2B_NXT&btype=SVRQUA&referrer=NRRAA::rne_source=B2B_NXT::btype=SVRQUA&source_caller=api&pid=KYC&SbTag=TlJSQUE=&deep_link_value=referrer%3DNRRAA%3A%3Arne_source%3DB2B_NXT%3A%3Abtype%3DSVRQUA&c=referral';
export const SERVICES = [
  {
    key: 'demat',
    title: 'Open a Demat Account',
    details: `${FIRM_NAME} offers a hassle-free process to open a demat account, which is necessary to hold and trade securities in India.`,
    icon: '',
    imageUrl: '/assets/images/demat-ac-services.jpeg',
    link: OPEN_DEMAT_LINK,
    cta: 'Open Free Demat Account',
    cardBorderClass: 'text-bg-info',
  },
  {
    key: 'iepf',
    title: 'Lost Share Recovery',
    details: `${FIRM_NAME} assists clients in recovering lost or unclaimed shares through the <b>Investor Education and Protection Fund (IEPF)</b>`,
    icon: '',
    imageUrl: '/assets/images/iepf.jpeg',
    link: '/recover-lost-shares-from-iepf',
    cta: 'View More',
    cardBorderClass: 'text-bg-warning',
  },
  {
    key: 'finPlan',
    title: 'Financial Planning',
    details: `${FIRM_NAME} helps clients develop a holistic financial plan to achieve long-term financial stability and security.`,
    icon: '',
    imageUrl: '/assets/images/planning.jpg',
    cardBorderClass: 'text-bg-dark',
  },
  {
    key: 'invMgmt',
    title: 'Investment Management',
    details: `${FIRM_NAME} provides expert investment advice and management services to help clients maximize returns and minimize risks.`,
    icon: '',
    imageUrl: '/assets/images/investment.jpg',
    cardBorderClass: 'text-bg-primary',
  },
  // {
  //   key: 'tax',
  //   title: 'Tax Planning',
  //   details: `${FIRM_NAME} offers customized tax planning solutions to help clients optimize their tax liabilities and take advantage of available tax-saving opportunities.`,
  //   icon: '',
  //   cardBorderClass: 'text-bg-secondary',
  // },
];

export const INQUIRY_SUBJECTS = [
  {
    key: 'dematServices',
    title: 'Open Demat A/C or related services',
  },
  {
    key: 'iepf',
    title: 'Recovery of lost shares from IEPF',
  },
  // {
  //     key: 'portfolioManagement',
  //     title: 'Portfolio Management',
  // },
  {
    key: 'algoTrading',
    title: 'Automated/Algo Trading',
  },
  // {
  //     key: 'taxManagement',
  //     title: 'Tax Planning or related services',
  // },
  {
    key: 'other',
    title: 'Any other query',
  },
];

export const CONTACT_ITEMS = [
  {
    key: 'email',
    title: 'Email',
    html: `<a href="mailto:inquiry@freedemataccount.co.in" target="_blank">inquiry@freedemataccount.co.in</a>&nbsp;<a href="mailto:inquiry@freedemataccount.co.in" target="_blank"><i class="bi bi-box-arrow-up-right text-primary" ></i></a>`,
    iconClass: 'bi bi-envelope-at',
    iconColor: '#f68a11',
  },
  {
    key: 'whatsapp',
    title: 'Whatsapp',
    html: `<a href="https://wa.me/919081038865" className="icon-link icon-link-hover" target="_blank">+91-9081038865</a>&nbsp;<a href="https://wa.me/919081038865" className="icon-link icon-link-hover" target="_blank"><i class="bi bi-box-arrow-up-right text-primary" ></i></a>`,
    iconClass: 'bi bi-whatsapp',
    iconColor: '#25885b',
  },
  {
    key: 'address',
    title: 'Address',
    html: '113, Pancharatna Building, Char rasta, above Turning point, Vapi, Gujarat 396195',
    iconClass: 'bi bi-buildings',
    iconColor: '#3d8cc6',
  },
  {
    key: 'maplocation',
    title: 'Map',
    html: `<a href="https://goo.gl/maps/Qmjh7SLv1dDVDEc88" className="icon-link icon-link-hover" target="_blank">https://goo.gl/maps/Qmjh7SLv1dDVDEc88</a>&nbsp;<a href="https://goo.gl/maps/Qmjh7SLv1dDVDEc88" className="icon-link icon-link-hover" target="_blank"><i class="bi bi-box-arrow-up-right text-primary" ></i></a>`,
    iconClass: 'bi bi-geo-alt',
    iconColor: '#f24d55',
  },
];
