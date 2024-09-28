import React from "react";
import './Button.scss'

type ButtonProps = {
    children?: React.ReactNode;
    className: string;
    href?: string;
    type?: string;
}

export default function Button({children, className, href}: ButtonProps): React.JSX.Element {
    const Component = href ? 'a' : 'button';

    return (
        <Component href={href} className={'button ' + className}>
            {children}
        </Component>
    );
}
