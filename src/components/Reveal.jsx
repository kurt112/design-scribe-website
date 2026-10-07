import {useEffect, useRef, useState} from 'react';

export default function Reveal({as = 'div', delay = 0, className = '', children, ...rest}) {
    const Tag = as;
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.12, rootMargin: '0px 0px -40px 0px'}
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            style={delay ? {transitionDelay: `${delay}ms`} : undefined}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
            {...rest}
        >
            {children}
        </Tag>
    );
}
