import clsx from 'clsx';
import { Link } from 'react-router-dom';

function Button({
    className,
    to,
    href,
    children,
    leftIcon,
    rightIcon,
    onClick,
}) {
    let Component = 'button';
    const props = { onClick };

    if (to) {
        Component = Link;
        props.to = to;
    }

    if (href) {
        Component = 'a';
        props.href = href;
    }

    return (
        <Component className={clsx('btn', className)} {...props}>
            {leftIcon && <span className="icon"> {leftIcon} </span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon"> {rightIcon} </span>}
        </Component>
    );
}

export default Button;
