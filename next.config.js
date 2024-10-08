const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});

const config = {
    output: "export",
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
};

const isGithubActions = true;//process.env.GITHUB_ACTIONS || false;
if (isGithubActions) {
    //const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
    const repo = 'gh-pages'.replace(/.*?\//, '');

    config.assetPrefix = `/${repo}/`
    config.basePath = `/${repo}`
}
console.log(config);

module.exports = withNextra(config);
