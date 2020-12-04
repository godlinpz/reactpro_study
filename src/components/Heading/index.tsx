import React from 'react';
import classnames from 'classnames';

import s from './Heading.module.scss';

interface IHeadingLevel {
    [n: string]: number;
}

const HEADING_LEVEL: IHeadingLevel = {
    xl: 1,
    l: 2,
    m: 3,
    s: 4,
    xs: 5,
};

interface HeadingProps {
    size?: 'xl' | 'l' | 'm' | 's' | 'xs';
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, size = 'xl', className }) => {
    const headingProps = {
        className: classnames(s.heading, s[size], className),
    };

    return React.createElement(`h${HEADING_LEVEL[size]}`, headingProps, children);
};

export default Heading;
