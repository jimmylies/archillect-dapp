import * as React from 'react';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import {
  DappUI,
  useGetLoginInfo,
  useGetAccountInfo
} from '@elrondnetwork/dapp-core';

const Home = () => {
  document.querySelectorAll('.part-item-faq').forEach((e) => {
    e.addEventListener('click', () => {
      const answer = e.lastElementChild;
      if (answer != undefined) {
        answer.classList.toggle('activeFaq');
      }
      console.log('ok');
    });
  });

  const showAnswer = (event: any) => {
    const answer = event.currentTarget.lastElementChild;
    answer?.classList.toggle('activeFaq');
    console.log(event);
  };

  return (
    <div className='main-container'>
      <div className='banner-section'>
        <div className='slider'>
          <figure>
            <img
              src='https://archillect-nft.com/images/1.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/2.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/3.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/4.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/5.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/6.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/7.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/8.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/9.png'
              alt='ArchillectNFT example'
            />
            <img
              src='https://archillect-nft.com/images/1.png'
              alt='ArchillectNFT example'
            />
          </figure>
        </div>

        <div className='presentation'>
          <p>
            Collection of{' '}
            <strong>
              <em>999</em>
            </strong>{' '}
            unique 3D Houses, created one by one. <br />
            A club around the wonderful world of architecture on Elrond. <br />
            This collection aims to enter several Metaverses, and become the
            reference in terms of architecture in the Metaverse.
          </p>
        </div>
      </div>

      <div className='part-about'>
        <h1>About Archillect NFT</h1>
        <div className='part-item'>
          <p className='item-title'>Some context and definition</p>
          <div className='item-description'>
            <span className='item-content'>
              The Metaverse takes an increasingly important place in the world
              of today. The creations are becoming more and more important, the
              projects more more enormous. A lot of professionals are interested
              in the Metaverse us, draftsmen and architects, in particular our
              team to find in the metaverse of projects to build and
              consolidate. Hence the idea Archillect NFT, houses that will be
              usable in the Metaverse in cities designed by us.
            </span>
          </div>
        </div>

        <div className='part-item'>
          <p className='item-title'>Objective of the project</p>
          <div className='item-description'>
            <span className='item-content'>
              The ultimate goal is to become: Architects of the Metaverse. Work
              on the architecture of neighborhoods / cities of many virtuals
              worlds staking lands for ArchillectNFT Holders.
            </span>
          </div>
        </div>
      </div>

      <div className='part-roadmap'>
        <h1>Roadmap</h1>
        <div className='part-item'>
          <p className='item-title'>
            <em>ARCHIMINT PHASE - Q2 2022</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>
              <div>May 13</div>
              &ensp;-
            </div>
            <span className='item-content'>
              <strong>Presale Whitelist</strong> | 99 ArchiNFT
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>
              <div>May 27</div>
              &ensp;-
            </div>
            <span className='item-content'>
              <strong>First Public Sale</strong> | 400 ArchiNFT
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>
              <div>June 17</div>
              &ensp;-
            </div>
            <span className='item-content'>
              <strong>Second Public Sale</strong> | 500 ArchiNFT
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>
              <div>June 25</div>
              &ensp;-
            </div>
            <span className='item-content'>
              <strong>Collection Reveal</strong> | Exchange of all minted NFTs
              to get the reveal
            </span>
          </div>
        </div>

        <div className='part-item'>
          <p className='item-title'>
            <em>VIRTUAL REALITY - Q3 & Q4 2022</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              <strong>ArchiNFT in augmented reality</strong> | Admire your
              ArchiNFT with breathtakingly realistic views
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              <strong>
                A 360 degree vision to contemplate all the details.
              </strong>
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              <strong>Virtual Reality Helmet</strong>
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              <strong>Giveaway</strong> | 5 VR helmets distributed between 5
              holders
            </span>
          </div>
        </div>

        <div className='part-item'>
          <p className='item-title'>
            <em>REWARDS - Q4 2022</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              <strong>
                Game access, tournament and exceptional contest every month to
                try to win more than $5,000 in gifts
              </strong>
            </span>
          </div>
        </div>

        <div className='part-item'>
          <p className='item-title'>
            <em>INTERIOR ArchiNFT - Q1 2023</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'> Do you have an ArchiNFT? </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              What does the interior of your Houses look like?
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              <strong>
                Watch the presentation of the interior of your ArchiNFT, with
                ever more impressive details It
              </strong>
            </span>
          </div>
        </div>

        <div className='part-item'>
          <p className='item-title'>
            <em>ENTER THE METAVERSE - Q2 & Q3 2023</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              All the details of your ArchiNFT are gathered ! It&apos;s time to
              enter the Metaverse
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              Many partnerships with several METAVERSE so that you can use your
              ArchiNFT in many metaverse
            </span>
          </div>
        </div>

        <div className='part-item'>
          <p className='item-title'>
            <em>NEXT?</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              The next roadmap will be released at the same time as the entry
              into the Metaverse.
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              It will be evolutive depending on partnership with all metaverse.
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              As a MindMAP, your ArchiNFT will be linked to more and more
              Metaverse over time
            </span>
          </div>
        </div>
      </div>

      <div className='part-faq'>
        <h1>FAQ</h1>
        <div className='part-item-faq' onClick={showAnswer}>
          <div className='item-title-faq'>
            How many ArchiNFTs have we built?
          </div>
          <div className='item-description-faq'>
            <span>
              We built a total of 999 ArchiNFT HD creating each one at a time.
              <br />
              ArchiNFTs are in the form of 20 seconds videos.
            </span>
          </div>
        </div>

        <div className='part-item-faq' onClick={showAnswer}>
          <p className='item-title-faq'>
            How much do I have to spend to become a homeowner?
          </p>
          <div className='item-description-faq'>
            <span>
              Price of Archillect-NFT Collection:
              <br /> Private sale: 1.45 $EGLD <br />
              Public sale: 1.65 $EGLD
            </span>
          </div>
        </div>

        <div className='part-item-faq' onClick={showAnswer}>
          <p className='item-title-faq'>How many ArchiNFTs will be minted?</p>
          <div className='item-description-faq'>
            <span>
              Private Sale: 99 ArchiNFT
              <br />
              Public Sale: 899 ArchiNFT
            </span>
          </div>
        </div>

        <div className='part-item-faq' onClick={showAnswer}>
          <p className='item-title-faq'>How many can I buy?</p>
          <div className='item-description-faq'>
            <span>
              Where will people sleep if you have all the houses? <br />
              Let’s create a large community of holders. <br />
              So you can mint <strong>2</strong> ArchiNFTs per wallet.
            </span>
          </div>
        </div>

        <div className='part-item-faq' onClick={showAnswer}>
          <p className='item-title-faq'>When can I buy ArchiNFTs?</p>
          <div className='item-description-faq'>
            <span>
              Private sale: <em>May 20, 2022</em>
              <br />
              Public sale: 1st wave on <em>May 27, 2022</em> & 2nd wave on{' '}
              <em>June 17, 2022</em>
            </span>
          </div>
        </div>

        <div className='part-item-faq' onClick={showAnswer}>
          <p className='item-title-faq'>
            How & when could I reveal my ArchiNFTs?
          </p>
          <div className='item-description-faq'>
            <span>
              Reveal of the collection: <em>June 25, 2022</em>
              <br />
              You will be able to reveal your ArchiNFTs by exchanging minted
              NFTs for revealed ArchiNFTs from the date of revelation.
            </span>
          </div>
        </div>
      </div>

      <div className='part-team'>
        <h1>TEAM</h1>
      </div>
    </div>
  );
};

export default Home;
