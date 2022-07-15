import ENV from '@/util/env.js';

export default function PageNotFoundPage(){
  return (<div style={{textAlign: 'center'}}>
    <h1> Page not found ._. </h1>
    <p> Return to <a href={`${ENV.url.prot}://${ENV.url.root}`} className="ib-link-light">ibad.one</a> </p>
  </div>);
}