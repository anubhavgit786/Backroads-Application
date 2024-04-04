import React from 'react';

import PageLink from "./PageLink";

import { pageLinks } from '../data';

const PageLinks = ({parentClass, itemClass}) => 
{
  return (
    <ul className={parentClass} id={parentClass}>

    { pageLinks.map((link) =>
    {
      const { id, href, text } = link;
      return (<PageLink key={id} href={href} text={text} itemClass={itemClass} />)
    })
    }
  </ul>
  );
}

export default PageLinks;
