import * as React from 'react';
import {
  transactionServices,
  useGetAccountInfo,
  refreshAccount,
  useGetNetworkConfig
} from '@elrondnetwork/dapp-core';
import {
  contractAddress,
  bech32contractAddress,
  collection,
  buildMethod
} from 'config';
import mergeImages from 'merge-images';
import ReactS3Client from 'react-aws-s3-typescript';

const Actions = () => {
  const account = useGetAccountInfo();
  const { network } = useGetNetworkConfig();
  const { address } = account;

  const { sendTransactions } = transactionServices;
  const isLoggedIn = Boolean(address);

  const [whatPage, setWhatPage] = React.useState<string>('mint');
  const [quantity, setQuantity] = React.useState(1);
  const [nbOwned, setNbOwned] = React.useState(0);
  const [numArchi, setNumArchi] = React.useState<Array<string>>([]);

  // Mint
  const mintNFT = async () => {
    const mint = {
      value: '200000000000000000',
      data: 'mint@0' + quantity,
      receiver: contractAddress
    };
    await refreshAccount();

    const { sessionId /*, error*/ } = await sendTransactions({
      transactions: mint,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Ping transaction',
        errorMessage: 'An error has occured during Ping',
        successMessage: 'Ping transaction successful'
      },
      redirectAfterSign: false
    });
    if (sessionId != null) {
      console.log('none');
    }
  };

  // Data NFTs
  const regexp = /([0-9]+)/;

  const data = async () => {
    const dataFetch = await fetch(
      `https://devnet-api.elrond.com/accounts/${address}/nfts?size=50&collection=${collection}`
    ).then((res) => res.json());
    for (let i = 0; i < dataFetch.length; i++) {
      const x = dataFetch[i]['name'];
      const regexNum: RegExpMatchArray | null = x.match(regexp);
      if (regexNum) {
        setNbOwned(1);
        setNumArchi((num) => [...num, regexNum[0]]);
      }
    }
    console.log('numArchi', numArchi);
  };

  React.useEffect(() => {
    data();
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          {address ===
            'erd15em4430juw2eallylcjmqwxq8ewt3nq8e050v3ufanvqy0fge9rspzq84x' ||
          address ===
            'erd19wkhfgs2glf97chl926fvwzgaq9eeakz474tzak6d998yu7xxtzqd3tng3' ||
          address ===
            'erd1palqae85fyha2m00a04qst3w6q0acryq9f4dnuy3m0atk8lks49qhvrdzu' ? (
            <div className='dapp'>
              {whatPage === 'mint' ? (
                <>
                  <div className='dapp-header'>
                    <div className='dapp-page activeDapp'>MINT</div>
                    <div
                      className='dapp-page'
                      onClick={() => {
                        setWhatPage('nft');
                      }}
                    >
                      MY NFTs
                    </div>
                  </div>
                  <div className='dapp-content'>
                    <span>Price: 0.1 $EGLD</span>
                    <span>Select quantity of NFTs</span>
                    <div className='select-quantity'>
                      <div
                        onClick={() => {
                          setQuantity(1);
                        }}
                      >
                        1
                      </div>
                      <div
                        onClick={() => {
                          setQuantity(2);
                        }}
                      >
                        2
                      </div>
                    </div>
                    <span>Final price: {quantity * 0.1} $EGLD</span>
                    <div className='mint-btn' onClick={mintNFT}>
                      MINT
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='dapp-header'>
                    <div
                      className='dapp-page'
                      onClick={() => {
                        setWhatPage('mint');
                      }}
                    >
                      MINT
                    </div>
                    <div className='dapp-page activeDapp'>MY NFTS</div>
                  </div>
                  <div className='dapp-content'>
                    <div className='nft-list'>
                      {nbOwned === 0 ? (
                        <span>
                          Go get an NFT, you doesn&apos;t have one yet
                        </span>
                      ) : (
                        <>
                          {numArchi.map((num) => (
                            <div key={num}>
                              <img
                                key={num}
                                src={`https://devnet-media.elrond.com/nfts/asset/QmYBP7KFRWYn8oiEMCoY4tN6LFjAmc9x88ozoSDDSuYEtW/${num}.png`}
                              />
                              <div className='nft-tag'>ArchiNFT #{num}</div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className='container-mint'>
              <div className='bnt-mint'>Mint available soon.</div>
            </div>
          )}
        </>
      ) : (
        <div className='container-mint'>
          <span>You need to be logged in.</span>
        </div>
      )}
    </>
  );
};

export default Actions;
