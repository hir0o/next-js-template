/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/*': ['src/*'],
    },
  },
}
