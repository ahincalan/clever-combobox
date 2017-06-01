export default {
  entry: 'npmdist/dist/index.js',
  dest: 'npmdist/bundles/clever-combobox.umd.js',
  format: 'umd',
  moduleName: 'clever-combobox',
  sourceMap: true,
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/http': 'ng.http',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic'
  },
  context: 'window',
  external: ['@angular/core', '@angular/forms', '@angular/common', '@angular/platform-browser', '@angular/http']
}
