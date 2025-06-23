/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kashitaka.dev",
  generateRobotsTxt: true,
  outDir: './docs',
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) => {
			const withoutHost = robotsTxt.replace(
				`# Host\nHost: https://kashitaka.dev\n\n`,
				"",
			);
			return withoutHost;
		},
  },
}