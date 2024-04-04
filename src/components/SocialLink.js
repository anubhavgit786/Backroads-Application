import React from 'react';

const SocialLink = ({ href, itemClass, icon }) => {
  return (
    <li>
      <a href={href} className={itemClass}><i className={icon}></i></a>
    </li>
  );
}

export default SocialLink;
