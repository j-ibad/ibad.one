import styles from '@/css/DocsTemplate.module.css';


export default function FinanceLinks(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>Finance Resouces &amp; Links</h3>
    </div>

    <div>
      <p> The following are some links for finance: </p>
    </div>
    
    <div>
      <h4>Equities (&amp; Equity Futures): </h4>
      <div className={styles.sectionItem}>
        <a className={styles.link} href="https://finance.yahoo.com/">
          <h5>Yahoo Finance</h5> - finance.yahoo.com
        </a>
        {/*<p> Aa </p>*/}
      </div>
      <div className={styles.sectionItem}>
        <a className={styles.link} href="https://www.msn.com/en-us/money">
          <h5>MSN: Money</h5> - msn.com/en-us/money
        </a>
        {/*<p> Aa </p>*/}
      </div>
    </div>

    <div>
      <h4>Fixed Income Securities: </h4>
      <div className={styles.sectionItem}>
        <a className={styles.link} href="https://www.treasurydirect.gov/auctions/announcements-data-results/">
          <h5>TreasuryDirect</h5> - treasurydirect.gov/auctions/announcements-data-results/
        </a>
        <p> TreasuryDirect is the official government website to directly buy Treausry securities. From T-bills, T-Notes, and T-Bonds,
          as well as other special Tresury securities, TreasuryDirect offers a place to buy securities directly, look at upcoming
          auctions, and obtain research data on past auctions, rates, and bidder data. </p>
      </div>
    </div>

    <div>
      <h4>Derivatives: </h4>
      <div className={styles.sectionItem}>
        <a className={styles.link} href="https://www.cmegroup.com/">
          <h5>CME Group (Chicago Mercantile Exchange)</h5> - cmegroup.com
        </a>
        <p>The Chicago Mercantile Exchange is the most prominent derivatives marketplace. In addition to being a hub for derivatives 
          trading, the CME, with a lot of data to analyze the markets themselves, is research source. Useful to find the current prices
          of futures and options of commodities, equity indexes, foreign exchange, even interest rates, crypto currences, and cleared swaps.
          Furthermore, the data it collects provides insights to market conditions such as sentiment, volatility, and liquidity. Also offers
          educational material.
        </p>
      </div>
    </div>

    <div>
      <h4>Educational Materials: </h4>
      <div className={styles.sectionItem}>
        <a className={styles.link} href="https://youtube.com/playlist?list=PLUl4u3cNGP63B2lDhyKOsImI7FjCf6eDW">
          <h5>MIT 15.401 Finance Theory I, Fall 2008 </h5> - MIT OpenCourseWare @Youtube
        </a>
      </div>
      <div className={styles.sectionItem}>
        <a className={styles.link} href="https://www.investopedia.com/">
          <h5>investopedia</h5> - investopedia.com
        </a>
      </div>
      
    </div>
  </div>);
}