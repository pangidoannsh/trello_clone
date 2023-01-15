import React from 'react';

const GlassIcon = ({ icon }) => {
    let render = (<span></span>);
    switch (icon) {
        case "board":
            render = (
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.62 5.00668L13.3733 14.0267C13.2133 14.7 12.6133 15.1667 11.92 15.1667H3.15998C2.15332 15.1667 1.43333 14.18 1.73333 13.2133L4.53999 4.20004C4.73332 3.57338 5.31333 3.13998 5.96667 3.13998L14.1667 3.13998C14.8 3.13998 15.3267 3.52665 15.5467 4.05999C15.6733 4.34665 15.7 4.67335 15.62 5.00668Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" />
                    <path opacity="0.4" d="M11.6667 15.1667H14.8534C15.7134 15.1667 16.3867 14.44 16.3267 13.58L15.6667 4.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.45331 4.75335L8.14665 1.87338" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.92 4.76001L12.5467 1.8667" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M6.13336 8.5H11.4667" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M5.46667 11.1667H10.8" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
            break;
        case "lock":
            render = (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M4 7.16668V5.83334C4 3.62668 4.66667 1.83334 8 1.83334C11.3333 1.83334 12 3.62668 12 5.83334V7.16668" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M7.99998 12.8333C8.92045 12.8333 9.66665 12.0871 9.66665 11.1667C9.66665 10.2462 8.92045 9.5 7.99998 9.5C7.07951 9.5 6.33331 10.2462 6.33331 11.1667C6.33331 12.0871 7.07951 12.8333 7.99998 12.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.3333 15.1667H4.66665C1.99998 15.1667 1.33331 14.5 1.33331 11.8333L1.33331 10.5C1.33331 7.83332 1.99998 7.16666 4.66665 7.16666H11.3333C14 7.16666 14.6666 7.83332 14.6666 10.5V11.8333C14.6666 14.5 14 15.1667 11.3333 15.1667Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            );
            break;
        case "search":
            render = (
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.85185 12.75C9.91243 12.75 12.3935 10.2689 12.3935 7.20832C12.3935 4.14775 9.91243 1.66666 6.85185 1.66666C3.79127 1.66666 1.31018 4.14775 1.31018 7.20832C1.31018 10.2689 3.79127 12.75 6.85185 12.75Z" stroke="#373737" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M12.9768 13.3333L11.8102 12.1667" stroke="#373737" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            );
            break;
        case "notification":
            render = (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.01339 2.44C5.80673 2.44 4.01339 4.23334 4.01339 6.44V8.36667C4.01339 8.77334 3.84006 9.39334 3.63339 9.74L2.86673 11.0133C2.39339 11.8 2.72006 12.6733 3.58673 12.9667C6.46006 13.9267 9.56006 13.9267 12.4334 12.9667C13.2401 12.7 13.5934 11.7467 13.1534 11.0133L12.3867 9.74C12.1867 9.39334 12.0134 8.77334 12.0134 8.36667V6.44C12.0134 4.24 10.2134 2.44 8.01339 2.44Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <path d="M9.2467 2.63333C9.04003 2.57333 8.8267 2.52667 8.6067 2.5C7.9667 2.42 7.35336 2.46667 6.78003 2.63333C6.97336 2.14 7.45336 1.79333 8.01336 1.79333C8.57336 1.79333 9.05336 2.14 9.2467 2.63333Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M10.0133 13.2067C10.0133 14.3067 9.11331 15.2067 8.01331 15.2067C7.46664 15.2067 6.95997 14.98 6.59997 14.62C6.23997 14.26 6.01331 13.7533 6.01331 13.2067" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" />
                </svg>
            );
            break;
        case "helper":
            render = (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3334 12.7867H8.66671L5.70003 14.76C5.26003 15.0533 4.66671 14.74 4.66671 14.2067V12.7867C2.66671 12.7867 1.33337 11.4534 1.33337 9.45337V5.45333C1.33337 3.45333 2.66671 2.12 4.66671 2.12H11.3334C13.3334 2.12 14.6667 3.45333 14.6667 5.45333V9.45337C14.6667 11.4534 13.3334 12.7867 11.3334 12.7867Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M7.99996 8.07333V7.93336C7.99996 7.48003 8.27998 7.24002 8.55998 7.04668C8.83331 6.86002 9.10661 6.62002 9.10661 6.18002C9.10661 5.56669 8.61329 5.07333 7.99996 5.07333C7.38663 5.07333 6.89331 5.56669 6.89331 6.18002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M7.99696 9.66668H8.00296" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
            break;
        case "filter":
            render = (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.60006 1.89999L12.4001 1.89999C13.1334 1.89999 13.7334 2.49999 13.7334 3.23333V4.69999C13.7334 5.23333 13.4001 5.89999 13.0667 6.23333L10.2001 8.76666C9.80006 9.09999 9.53339 9.76666 9.53339 10.3V13.1667C9.53339 13.5667 9.26672 14.1 8.93339 14.3L8.00006 14.9C7.13339 15.4333 5.93339 14.8333 5.93339 13.7667V10.2333C5.93339 9.76666 5.66672 9.16666 5.40006 8.83333L2.86672 6.16666C2.53339 5.83333 2.26672 5.23333 2.26672 4.83333V3.29999C2.26672 2.49999 2.86672 1.89999 3.60006 1.89999Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M7.28667 1.89999L4 7.16666" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
            break;
        case "flash":
            render = (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.05999 9.35335H6.11999V14.1533C6.11999 15.2733 6.72665 15.5 7.46665 14.66L12.5133 8.92668C13.1333 8.22668 12.8733 7.64668 11.9333 7.64668H9.87332V2.84668C9.87332 1.72668 9.26665 1.50001 8.52665 2.34001L3.47999 8.07335C2.86665 8.78001 3.12665 9.35335 4.05999 9.35335Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            );
            break;
        case "more":
            render = (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 7.16666C2.6 7.16666 2 7.76666 2 8.49999C2 9.23332 2.6 9.83332 3.33333 9.83332C4.06667 9.83332 4.66667 9.23332 4.66667 8.49999C4.66667 7.76666 4.06667 7.16666 3.33333 7.16666Z" stroke="white" strokeWidth="1.5" />
                    <path d="M12.6667 7.16666C11.9334 7.16666 11.3334 7.76666 11.3334 8.49999C11.3334 9.23332 11.9334 9.83332 12.6667 9.83332C13.4 9.83332 14 9.23332 14 8.49999C14 7.76666 13.4 7.16666 12.6667 7.16666Z" stroke="white" strokeWidth="1.5" />
                    <path opacity="0.4" d="M7.99996 7.16666C7.26663 7.16666 6.66663 7.76666 6.66663 8.49999C6.66663 9.23332 7.26663 9.83332 7.99996 9.83332C8.73329 9.83332 9.33329 9.23332 9.33329 8.49999C9.33329 7.76666 8.73329 7.16666 7.99996 7.16666Z" stroke="white" strokeWidth="1.5" />
                </svg>

            );
            break;
        case "user-add":
            render = (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99996 8.50001C9.84091 8.50001 11.3333 7.00763 11.3333 5.16668C11.3333 3.32573 9.84091 1.83334 7.99996 1.83334C6.15901 1.83334 4.66663 3.32573 4.66663 5.16668C4.66663 7.00763 6.15901 8.50001 7.99996 8.50001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path opacity="0.4" d="M2.27332 15.1667C2.27332 12.5867 4.83998 10.5 7.99998 10.5C8.63998 10.5 9.25999 10.5867 9.83999 10.7467" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6667 12.5C14.6667 12.7133 14.64 12.92 14.5867 13.12C14.5267 13.3867 14.4201 13.6467 14.2801 13.8733C13.8201 14.6467 12.9734 15.1667 12 15.1667C11.3134 15.1667 10.6934 14.9067 10.2267 14.48C10.0267 14.3067 9.85337 14.1 9.72003 13.8733C9.47337 13.4733 9.33337 13 9.33337 12.5C9.33337 11.78 9.62004 11.12 10.0867 10.64C10.5734 10.14 11.2534 9.83334 12 9.83334C12.7867 9.83334 13.5 10.1734 13.98 10.72C14.4067 11.1934 14.6667 11.82 14.6667 12.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.9934 12.4866H11.0067" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.0002 11.5133V13.5067" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            );
            break;

        default:
            render = (<span></span>);
    }
    return render;
}

export default GlassIcon;
