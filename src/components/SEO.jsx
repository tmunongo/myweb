import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ post }) => {
  return (
    <>
      <Helmet>
        {/* Standard tags */}
        <meta name="description" content={post.blurb} />
        {/* FB tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.blurb} />
        <meta property="og:image" content={post.coverURL} />
        {/* Twitter tags */}
        <meta name="twitter:card" content={post.coverURL} />
        <meta name="twitter:site" content="@edtha3rd" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.blurb} />
        <meta name="twitter:image" content={post.coverURL} />
      </Helmet>
    </>
  );
};

export default SEO;
