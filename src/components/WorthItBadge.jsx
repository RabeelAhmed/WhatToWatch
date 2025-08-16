import React from 'react';
import { getWorthItVerdict } from '../utils/helpers';

const WorthItBadge = ({ rating, className = '' }) => {
  const verdict = getWorthItVerdict(rating);
  
  return (
    <div className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${verdict.color} text-white ${className}`}>
      {verdict.emoji}
    </div>
  );
};

export default WorthItBadge;