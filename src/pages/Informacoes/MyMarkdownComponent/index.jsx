import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const MyMarkdownComponent = ({ markdownText }) => {
  const components = {
    // Use a custom Link component for internal links
    a: ({ node, ...props }) => {
      if (props.href && props.href.startsWith('/')) {
        return <Link to={props.href}>{props.children}</Link>;
      }

      return <a {...props}>{props.children}</a>;
    },
  };

  return <ReactMarkdown components={components}>{markdownText}</ReactMarkdown>;
};

export default MyMarkdownComponent;
