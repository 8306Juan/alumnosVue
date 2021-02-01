// vue.config.js file to be place in the root of your repository

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/https://github.com/8306Juan/gestor-Alumnos/'
    : '/'
}