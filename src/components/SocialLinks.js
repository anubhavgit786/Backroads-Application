import React from 'react';

import SocialLink from "./SocialLink";

import { socialLinks } from '../data';

const SocialLinks = ({ parentClass, itemClass}) => 
{
  return (
    <ul className={parentClass}>

    { socialLinks.map((link) =>
      {
        const { id, href, icon } = link;
        return (<SocialLink key={id} href={href} itemClass={itemClass} icon={icon} />);
      })
      }
    </ul>
  );
}

export default SocialLinks;
