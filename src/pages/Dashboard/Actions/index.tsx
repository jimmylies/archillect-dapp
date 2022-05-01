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
          <div className='bnt-mint'>Mint available soon.</div>
        </div>
      ) : (
        <div className='container-mint'>
          <div>You need to be logged in.</div>
        </div>
      )}
    </>
  );
};

export default Actions;
