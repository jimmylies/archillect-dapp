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
  baseCollection,
  revealedCollection,
  revealMethod
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
  const [numBase, setNumBase] = React.useState<Array<string>>([]);
  const [numRevealed, setNumRevealed] = React.useState<Array<string>>([]);
  const [nonceArchi, setNonceArchi] = React.useState<Array<string>>([]);

  // Mint
  const mintNFT = async () => {
    const mint = {
      value: (100000000000000000 * quantity).toFixed(0).toString(),
      data: 'mint@',
      receiver: contractAddress
    };
    const nb = quantity.toString(16);
    if (nb.length % 2 !== 0) {
      mint.data += '0';
    }
    mint.data += nb;
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
      console.log('null');
    }
  };

  // Data NFTs
  const regexp = /([0-9]+)/;

  const data = async () => {
    const dataFetch = await fetch(
      `https://devnet-api.elrond.com/accounts/${address}/nfts?size=50&collection=${baseCollection}`
    ).then((res) => res.json());
    for (let i = 0; i < dataFetch.length; i++) {
      const x = dataFetch[i]['name'];
      const regexNum: RegExpMatchArray | null = x.match(regexp);
      if (regexNum) {
        setNbOwned(1);
        setNumBase((num) => [...num, regexNum[0]]);
        setNonceArchi((num) => [...num, dataFetch[i]['nonce']]);
      }
    }

    const dataFetchRevealed = await fetch(
      `https://devnet-api.elrond.com/accounts/${address}/nfts?size=50&collection=${revealedCollection}`
    ).then((res) => res.json());
    for (let i = 0; i < dataFetchRevealed.length; i++) {
      const y = dataFetchRevealed[i]['name'];
      const regexNumR: RegExpMatchArray | null = y.match(regexp);
      if (regexNumR) {
        setNbOwned(1);
        setNumRevealed((num) => [...num, regexNumR[0]]);
      }
    }
  };

  const sendRevealTx = async (nonce: string) => {
    const revealTx = {
      data: 'ESDTNFTTransfer',
      gasLimit: 30000000,
      receiver: address
    };
    await refreshAccount();

    const co = Buffer.from(baseCollection).toString('hex');
    revealTx.data += `@${co}@${nonce}@01@${bech32contractAddress}@${revealMethod}`;

    // Execute transaction
    const { sessionId, error } = await sendTransactions({
      transactions: revealTx,
      transactionsDisplayInfo: {
        processingMessage: 'Processing transaction',
        errorMessage: 'An error has occured',
        successMessage: 'Transaction successful'
      },
      redirectAfterSign: false
    });
    if (sessionId != null) {
      console.log('null');
    }
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
                    <div
                      className='dapp-page'
                      onClick={() => {
                        setWhatPage('reveal');
                      }}
                    >
                      REVEAL
                    </div>
                  </div>
                  <div className='dapp-content'>
                    <span>Price: 0.1 $EGLD</span>
                    <span>Select quantity of NFTs</span>
                    <div className='select-quantity'>
                      <div
                        id='minus'
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </div>
                      <div>{quantity}</div>
                      <div
                        id='plus'
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        +
                      </div>
                    </div>
                    <span>
                      Final price: {(quantity * 0.1).toFixed(2)} $EGLD
                    </span>
                    <div className='mint-btn' onClick={mintNFT}>
                      MINT
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {whatPage === 'nft' ? (
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
                        <div
                          className='dapp-page'
                          onClick={() => {
                            setWhatPage('reveal');
                          }}
                        >
                          REVEAL
                        </div>
                      </div>
                      <div className='dapp-content-nfts'>
                        <div className='nft-list'>
                          {nbOwned === 0 ? (
                            <span>
                              Go get an NFT, you doesn&apos;t have one yet
                            </span>
                          ) : (
                            <>
                              {numBase.map((num) => (
                                <div key={num} className='container-nft'>
                                  <img
                                    src={`https://devnet-media.elrond.com/nfts/asset/QmYBP7KFRWYn8oiEMCoY4tN6LFjAmc9x88ozoSDDSuYEtW/${num}.png`}
                                  />
                                  <div className='nft-tag'>
                                    ArchiNFT Ticket #{num}
                                  </div>
                                </div>
                              ))}
                              {numRevealed.map((num) => (
                                <div key={num} className='container-nft'>
                                  <img
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
                        <div
                          className='dapp-page'
                          onClick={() => {
                            setWhatPage('nft');
                          }}
                        >
                          MY NFTs
                        </div>
                        <div
                          className='dapp-page activeDapp'
                          onClick={() => {
                            setWhatPage('reveal');
                          }}
                        >
                          REVEAL
                        </div>
                      </div>
                      <div className='dapp-content-nfts'>
                        <div className='nft-list'>
                          {nbOwned === 0 ? (
                            <span>
                              Go get an NFT, you doesn&apos;t have one yet
                            </span>
                          ) : (
                            <>
                              {numBase.map((num, index) => (
                                <>
                                  <div key={num} className='container-nft'>
                                    <img
                                      src={`https://devnet-media.elrond.com/nfts/asset/QmYBP7KFRWYn8oiEMCoY4tN6LFjAmc9x88ozoSDDSuYEtW/${num}.png`}
                                    />
                                    <div className='nft-tag'>
                                      ArchiNFT Ticket #{num}
                                    </div>
                                    <div
                                      className='reveal'
                                      onClick={() => {
                                        let nonce =
                                          nonceArchi[index].toString();
                                        if (nonce.length % 2 != 0) {
                                          nonce = '0' + nonce;
                                        }
                                        sendRevealTx(nonce);
                                        console.log('ok');
                                      }}
                                    >
                                      REVEAL
                                    </div>
                                  </div>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}
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
