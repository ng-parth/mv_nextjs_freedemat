import Link from 'next/link';
import React from 'react';

const StickToBottom = (props) => {
  const {
    ctaLink = '#',
    cta = '',
    ctaClass = 'btn-success',
    target = '_blank',
  } = props;
  if (!cta) return false;
  return (
    <Link
      href={ctaLink}
      target={target}
      className={`${ctaClass} btn sticky-btn`}
    >
      {cta} {target === '_blank' && <i class="bi bi-box-arrow-up-right"></i>}
    </Link>
  );
};

export default StickToBottom;
