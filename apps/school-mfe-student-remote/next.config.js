const NextFederationPlugin = require('@module-federation/nextjs-mf');
const SharedConfig = require('../../get-shared-configs');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'school-student-remote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: SharedConfig.getCommonExposes(),
        remotes: SharedConfig.getRemote(options.isServer),
        shared: SharedConfig.getShareModules(),
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
