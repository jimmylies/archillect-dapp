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

  // Mint
  const mintNFT = async () => {
    const mint = {
      value: '300000000000000000',
      data: 'mint@03',
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

  return (
    <>
      {isLoggedIn ? (
        <div className='container-mint'>
          {address ===
            'erd15em4430juw2eallylcjmqwxq8ewt3nq8e050v3ufanvqy0fge9rspzq84x' ||
          address ===
            'erd19wkhfgs2glf97chl926fvwzgaq9eeakz474tzak6d998yu7xxtzqd3tng3' ? (
            <div className='bnt-mint'>Mint available now.</div>
          ) : (
            <div className='bnt-mint'>Mint available soon.</div>
          )}
        </div>
      ) : (
        <div className='container-mint'>
          <span>You need to be logged in.</span>
        </div>
      )}
    </>
  );
};

export default Actions;
