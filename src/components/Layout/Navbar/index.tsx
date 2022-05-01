import React from 'react';
import { DappUI, logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { routeNames } from 'routes';

import logo from '../../../assets/img/logo.png';

import sal from 'sal.js';

const Navbar = () => {
  const { address } = useGetAccountInfo();
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const [isMethod, setIsMethod] = React.useState(false);

  const isLoggedIn = Boolean(address);

  const showMethod = () => {
    setIsMethod(true);
  };

  const logOut = () => {
    logout(`${window.location.origin}`);
  };

  const page = document.querySelectorAll('.page');

  const isDapp = () => {
    for (let i = 0; i < page.length; i++) {
      if (page[i] != undefined) {
        page[i].classList.remove('activePage');
      }
    }
    if (window.location.pathname === routeNames.home) {
      page[0]?.classList.add('activePage');
    } else {
      page[1]?.classList.add('activePage');
    }
  };

  isDapp();

  document.addEventListener('scroll', () => {
    sal();
  });

  React.useEffect(() => {
    sal();
  }, []);

  return (
    <>
      <header data-sal='slide-up' data-sal-duration='800'>
        <div className='header-left'>
          <a href={routeNames.home} className='logo-header'>
            <img src={logo} alt='logo' />
          </a>
          <div className='siteDapp'>
            <a href={routeNames.home} className='page activePage'>
              Website
            </a>
            <a href={routeNames.dashboard} className='page'>
              Dapp
            </a>
          </div>
        </div>
        <nav>
          <div
            className='btn-connect'
            onClick={() => {
              if (isLoggedIn) {
                logOut();
              } else {
                showMethod();
              }
            }}
          >
            {isLoggedIn ? (
              'Logout'
            ) : (
              <>
                {isMethod ? (
                  <>
                    <ExtensionLoginButton
                      callbackRoute={routeNames.dashboard}
                      loginButtonText={'Extension'}
                    />
                    <WebWalletLoginButton
                      callbackRoute={routeNames.dashboard}
                      loginButtonText={'Web wallet'}
                    />
                    <LedgerLoginButton
                      loginButtonText={'Ledger'}
                      callbackRoute={routeNames.dashboard}
                      className={'test-class_name'}
                    />
                    <WalletConnectLoginButton
                      callbackRoute={routeNames.dashboard}
                      loginButtonText={'Maiar'}
                    />
                  </>
                ) : (
                  'Connect Wallet'
                )}
              </>
            )}
          </div>
          <a
            href='https://discord.gg/qDHu9rC57Q'
            target='_blanck'
            className='social discord'
          >
            Discord
          </a>
          <a
            href='https://twitter.com/ArchillectNFT/'
            target='_blanck'
            className='social'
          >
            Twitter
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
