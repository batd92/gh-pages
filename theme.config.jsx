import { useRouter } from "next/router";
import Image from 'next/image';
import codingMayImage from './public/git-qr-code.png';
import qrcodeImage from './public/mail-qr-code.png';

const metaTags = (
    <>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
            name="description"
            content="Welcome to batd92"
        />
        <meta name="keywords" content="batd, docker, nest, ai, ci/cd, node, typescript, redis, php, mongodb" />
        <meta property="og:title" content="Learn" />
        <meta property="og:description" content="Learn Information Technology" />
        <meta property="og:image" content="/chapter0-dashboard.avif" />
    </>
);

const ExtraContent = () => {
    return <>
        <div class="flex flex-col items-center">
            <Image
                src={codingMayImage}
                className="mb-4 rounded-md shadow-lg"
                alt=""
                width={180}
                height={180}
            />
            <p class="nx-text-xs font-bold text-center">Github</p>

            <div class="h-5"></div>

            <Image
                src={qrcodeImage}
                className="mb-4 rounded-md shadow-lg"
                alt=""
                width={180}
                height={180}
            />
            <p class="nx-text-xs font-bold text-center">Gmail</p>
        </div>
    </>
}

const config = {
    head: metaTags,
    logo: <span>APT-92</span>,
    project: {
        link: "https://github.com/batd92",
    },
    docsRepositoryBase:
        "https://github.com/batd92",
    search: {
        placeholder: "Search",
    },
    sidebar: {
        toggleButton: true,
    },
    toc: {
        backToTop: true,
        extraContent: <ExtraContent />,
    },
    feedback: { content: null },
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath === "/") {
            return {
                titleTemplate: "Learn Information Technology",
            };
        }

        return {
            titleTemplate: "%s - Learn Information Technology",
        };
    },
    gitTimestamp: null,
    footer: {
        text: (
            <span>
                <a
                    href=""
                    target="_blank"
                >
                    MIT License - Copyright (c) 2024
                </a>
            </span>
        ),
    },
};

export default config;
