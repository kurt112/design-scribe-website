const PATHS = {
    layers: <><path d="M12 3 2.5 8 12 13l9.5-5L12 3Z"/><path d="m2.5 12.5 9.5 5 9.5-5"/><path d="m2.5 16.5 9.5 5 9.5-5" opacity=".5"/></>,
    code: <><path d="m8 7-5 5 5 5"/><path d="m16 7 5 5-5 5"/><path d="m13.5 4-3 16"/></>,
    pen: <><path d="M12 19.5 19.5 12l2 2-7.5 7.5h-2v-2Z"/><path d="M18 13.5 16.5 6 3 3l3 13.5 7.5 1.5"/><path d="m3 3 7.3 7.3"/><circle cx="11.5" cy="11.5" r="1.8"/></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.4 7.5 9.5 4.4-1.1 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/></>,
    'check-circle': <><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.7-4.8"/></>,
    check: <path d="m5 12.5 4.5 4.5L19 7.5"/>,
    sparkles: <><path d="M12 3.5 13.8 9 19.5 10.5 13.8 12 12 17.5 10.2 12 4.5 10.5 10.2 9 12 3.5Z"/><path d="M19 16v4M17 18h4"/></>,
    heart: <path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z"/>,
    handshake: <><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a2.8 2.8 0 0 0-4 0l-.9.9a1.4 1.4 0 1 1-2-2l2.8-2.8a3.9 3.9 0 0 1 4.8-.6l.5.3a3 3 0 0 0 2.1.3L21 6"/><path d="m21 5 1 9h-2"/><path d="M3 5 2 14l6.5 6.5a1.4 1.4 0 0 0 2-2"/><path d="M3 6h8"/></>,
    lock: <><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/><path d="M12 14.5v2"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="13.5" width="4" height="6" rx="1.5"/><rect x="17" y="13.5" width="4" height="6" rx="1.5"/><path d="M19 19.5a3 3 0 0 1-3 2.5h-3"/></>,
    'arrow-right': <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    play: <><circle cx="12" cy="12" r="9"/><path d="M10 8.8v6.4l5.2-3.2L10 8.8Z" fill="currentColor"/></>,
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.4-4.4"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    x: <><path d="M6 6l12 12"/><path d="M18 6 6 18"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></>,
    chat: <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4A8 8 0 1 1 20 12Z"/>,
    quote: <path d="M9.5 7C6.5 7 5 9.2 5 12v5h5.5v-5.5H7.5c0-1.7.8-2.7 2-2.7V7Zm9 0c-3 0-4.5 2.2-4.5 5v5h5.5v-5.5h-3c0-1.7.8-2.7 2-2.7V7Z" fill="currentColor" stroke="none"/>,
    star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8L12 3.5Z" fill="currentColor" stroke="none"/>,
    linkedin: <path d="M6.5 9.5h-3V20h3V9.5ZM5 4a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 5 4Zm15 10c0-2.9-1.6-4.7-4.2-4.7-1.3 0-2.3.6-2.8 1.4V9.5h-3V20h3v-5.6c0-1.4.7-2.4 1.9-2.4s1.8.9 1.8 2.4V20H20v-6Z" fill="currentColor" stroke="none"/>,
    github: <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6.9.1 1.5 1 1.5 1 .9 1.5 2.3 1 2.8.8.1-.6.3-1 .6-1.3-2.1-.2-4.3-1-4.3-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.5 1 2.6 0 3.7-2.2 4.5-4.3 4.7.3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor" stroke="none"/>,
    external: <><path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/></>,
    rocket: <><path d="M14.5 4.5c2.5-1 5-1 5-1s0 2.5-1 5L13 14l-3-3 4.5-6.5Z"/><path d="M10 11 6.5 10 4 12.5l4 .5"/><path d="m13 14 1 3.5-2.5 2.5-.5-4"/><path d="M6.5 17.5c-1 .5-2 2.5-2 2.5s2-1 2.5-2"/></>,
};

export default function Icon({name, className = 'h-5 w-5', strokeWidth = 1.75, ...rest}) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
            {...rest}
        >
            {PATHS[name]}
        </svg>
    );
}
