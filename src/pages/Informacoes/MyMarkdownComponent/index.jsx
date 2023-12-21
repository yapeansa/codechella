//import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const MyMarkdownComponent = ({ markdownText }) => {
    const renderers = {
        link: ({ href, children }) => {
            // Check if the link is an internal link (starts with '/')
            if (href && href.startsWith('/')) {
                // Use react-router's Link component for internal links
                return <Link to={href}>{children}</Link>;
            }

            // Default behavior for external links
            return <a href={href}>{children}</a>;
        },
    };

    return <ReactMarkdown components={renderers} children={markdownText} />;
};

export default MyMarkdownComponent;
