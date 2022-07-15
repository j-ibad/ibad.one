const IS_PROD = (process.env.NODE_ENV !== 'development');

export default {
  prod: IS_PROD,
  url: {
    root: (IS_PROD) ? 'ibad.one' : 'ibad.test:3000',
    prot: (IS_PROD) ? 'https' : 'http'
  }
}