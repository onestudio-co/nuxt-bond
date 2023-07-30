module.exports = {
  apps: [
    {
      name: 'NUXT BOND',
      port: '3001',
      exec_mode: 'cluster',
      instances: 'min',
      script: './.output/server/index.mjs',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
