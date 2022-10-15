const IS_PROD = ((process.env.NODE_ENV || '').trim() !== 'development');
const ENVIRONMENT = {
  prod: IS_PROD,
  url: {
    apiRoot: (IS_PROD) ? 'ibad.one' : 'ibad.test:5000',
    root: (IS_PROD) ? 'ibad.one' : 'ibad.test:3000',
    prot: (IS_PROD) ? 'https' : 'http'
  }
}


export default ENVIRONMENT;