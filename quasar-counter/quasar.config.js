/* eslint-env node */

/*
 * Este archivo se ejecuta en el contexto de Node.js (NO se transpila con Babel), 
 * por lo que solo se deben usar las características ES6 compatibles con tu versión de Node. 
 * Consulta: https://node.green/
 */

// Configuración para tu app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    // Archivos de inicialización (/src/boot)
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: [],

    // Configuración CSS
    css: ['app.scss'],

    // Fuentes y iconos
    extras: [
      'roboto-font', // Fuente opcional
      'material-icons', // Iconos opcionales
    ],

    // Configuración de compilación
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },
      vueRouterMode: 'hash', // Opciones disponibles: 'hash', 'history'
      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"',
            },
          },
          { server: false },
        ],
      ],
    },

    // Configuración del servidor de desarrollo
    devServer: {
      open: true, // Abre el navegador automáticamente
    },

    // Configuración del framework Quasar
    framework: {
      config: {},
      plugins: ['LocalStorage'], // Plugins de Quasar usados
    },

    // Configuración SSR
    ssr: {
      pwa: false,
      prodPort: 3000, // Puerto del servidor en producción
      middlewares: ['render'], // Mantener "render" como el último middleware
    },

    // Configuración PWA
    pwa: {
      workboxMode: 'generateSW', // Opciones: 'generateSW', 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },

    // Configuración Capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Configuración Electron
    electron: {
      inspectPort: 5858,
      bundler: 'packager', // Opciones: 'packager', 'builder'
      builder: {
        appId: 'quasar-counter',
      },
    },

    // Configuración BEX (extensiones del navegador)
    bex: {
      contentScripts: ['my-content-script'],
    },
  };
});
