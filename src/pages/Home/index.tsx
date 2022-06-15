import * as React from 'react';
import { routeNames } from 'routes';
import sal from 'sal.js';
import {
  DappUI,
  useGetLoginInfo,
  useGetAccountInfo
} from '@elrondnetwork/dapp-core';
import { Link } from 'react-router-dom';

import img1 from '../../assets/img/slider/1.png';
import img2 from '../../assets/img/slider/2.png';
import img3 from '../../assets/img/slider/3.png';
import img4 from '../../assets/img/slider/4.png';
import img5 from '../../assets/img/slider/5.png';
import img6 from '../../assets/img/slider/6.png';
import img7 from '../../assets/img/slider/7.png';
import img8 from '../../assets/img/slider/8.png';
import img9 from '../../assets/img/slider/9.png';

const Home = () => {
  document.querySelectorAll('.part-item-faq').forEach((e) => {
    e.addEventListener('click', () => {
      const answer = e.lastElementChild;
      if (answer != undefined) {
        answer.classList.toggle('activeFaq');
      }
    });
  });

  const showAnswer = (event: any) => {
    const answer = event.currentTarget.lastElementChild;
    answer?.classList.toggle('activeFaq');
  };

  document.addEventListener('scroll', () => {
    sal();
  });

  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div className='main-container'>
      <div
        className='banner-section'
        data-sal='slide-up'
        data-sal-duration='800'
      >
        <div className='slider'>
          <figure>
            <img src={img1} alt='ArchillectNFT example' />
            <img src={img2} alt='ArchillectNFT example' />
            <img src={img3} alt='ArchillectNFT example' />
            <img src={img4} alt='ArchillectNFT example' />
            <img src={img5} alt='ArchillectNFT example' />
            <img src={img6} alt='ArchillectNFT example' />
            <img src={img7} alt='ArchillectNFT example' />
            <img src={img8} alt='ArchillectNFT example' />
            <img src={img9} alt='ArchillectNFT example' />
            <img src={img1} alt='ArchillectNFT example' />
          </figure>
        </div>

        <div
          className='presentation'
          data-sal='slide-up'
          data-sal-duration='800'
        >
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

      <div className='part-about' id='about'>
        <h1 data-sal='slide-up' data-sal-duration='800'>
          About Archillect NFT
        </h1>
        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
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

        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
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

      <div className='part-roadmap' id='roadmap'>
        <h1 data-sal='slide-up' data-sal-duration='800' data-sal-delay='200'>
          Roadmap
        </h1>
        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
          <p className='item-title'>
            <em>ARCHIMINT PHASE - Q2 2022</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>
              <div>May 20</div>
              &ensp;-
            </div>
            <span className='item-content'>
              <strong>Presale Whitelist</strong> | 99 ArchiNFT
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>
              <div>Jun 20</div>
              &ensp;-
            </div>
            <span className='item-content'>
              <strong>Public Sale</strong> | 900 ArchiNFT
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>
              <div>Aug 06</div>
              &ensp;-
            </div>
            <span className='item-content'>
              <strong>Collection Reveal</strong> | Exchange of all minted NFTs
              to get the reveal
            </span>
          </div>
        </div>

        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
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
                A 360 degree vision to contemplate all the details
              </strong>
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              <strong>Virtual Reality Helmet</strong>.
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

        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
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

        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
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
                ever more impressive details it
              </strong>
            </span>
          </div>
        </div>

        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
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

        <div className='part-item' data-sal='slide-up' data-sal-duration='800'>
          <p className='item-title'>
            <em>NEXT?</em>
          </p>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              The next roadmap will be released at the same time as the entry
              into the Metaverse
            </span>
          </div>
          <div className='item-description'>
            <div className='item-date'>-</div>
            <span className='item-content'>
              It will be evolutive depending on partnership with all metaverse
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

      <div className='part-videos' id='preview'>
        <h1 data-sal='slide-up' data-sal-duration='800'>
          ArchiNFTs Preview
        </h1>
        <div className='container-videos'>
          <img src={img4} alt='ArchillectNFT example' />
          <img src={img5} alt='ArchillectNFT example' />
          <img src={img6} alt='ArchillectNFT example' />
        </div>
      </div>

      <div className='part-faq' id='faq'>
        <h1 data-sal='slide-up' data-sal-duration='800'>
          FAQ
        </h1>
        <div
          className='part-item-faq'
          data-sal='slide-up'
          data-sal-duration='800'
          onClick={showAnswer}
        >
          <div className='item-title-faq'>
            How many ArchiNFTs have we built?
          </div>
          <div className='item-description-faq activeFaq'>
            <span>
              We built a total of 999 ArchiNFT HD creating each one at a time.
              <br />
              ArchiNFTs are in the form of 20 seconds videos.
            </span>
          </div>
        </div>

        <div
          className='part-item-faq'
          data-sal='slide-up'
          data-sal-duration='800'
          onClick={showAnswer}
        >
          <p className='item-title-faq'>
            How much do I have to spend to become a homeowner?
          </p>
          <div className='item-description-faq activeFaq'>
            <span>
              Price of Archillect-NFT Collection:
              <br /> NFT price: 0.6 $EGLD
            </span>
          </div>
        </div>

        <div
          className='part-item-faq'
          data-sal='slide-up'
          data-sal-duration='800'
          onClick={showAnswer}
        >
          <p className='item-title-faq'>How many ArchiNFTs will be minted?</p>
          <div className='item-description-faq activeFaq'>
            <span>
              Private Sale: 99 ArchiNFT
              <br />
              Public Sale: 899 ArchiNFT
            </span>
          </div>
        </div>

        <div
          className='part-item-faq'
          data-sal='slide-up'
          data-sal-duration='800'
          onClick={showAnswer}
        >
          <p className='item-title-faq'>How many can I buy?</p>
          <div className='item-description-faq activeFaq'>
            <span>
              There is no limit per wallet, enjoy all the wonderful houses you
              can get
            </span>
          </div>
        </div>

        <div
          className='part-item-faq'
          data-sal='slide-up'
          data-sal-duration='800'
          onClick={showAnswer}
        >
          <p className='item-title-faq'>When can I buy ArchiNFTs?</p>
          <div className='item-description-faq activeFaq'>
            <span>
              Private sale: <em>May 20, 2022</em>
              <br />
              Public sale: <em>June 20, 2022</em>
            </span>
          </div>
        </div>

        <div
          className='part-item-faq'
          data-sal='slide-up'
          data-sal-duration='800'
          onClick={showAnswer}
        >
          <p className='item-title-faq'>
            How & when could I reveal my ArchiNFTs?
          </p>
          <div className='item-description-faq activeFaq'>
            <span>
              Reveal of the collection: <em>August 06, 2022</em>
              <br />
              You will be able to reveal your ArchiNFTs by exchanging minted
              NFTs for revealed ArchiNFTs from the date of revelation.
            </span>
          </div>
        </div>
      </div>

      <div className='part-team' id='team'>
        <h1 data-sal='slide-up' data-sal-duration='800'>
          TEAM
        </h1>
        <div className='container-profils'>
          <div
            className='item-profil'
            data-sal='slide-up'
            data-sal-duration='800'
          >
            <span className='name'>Abdel Aimo (LazyArchi)</span>
            <div className='pp'>
              <img src={img6} />
            </div>
            <span className='role'>Project Manager / Drafters</span>
          </div>

          <div
            className='item-profil'
            data-sal='slide-up'
            data-sal-duration='800'
          >
            <span className='name'>Nicolas Durenne (AbilArchi)</span>
            <div className='pp'>
              <img src={img5} />
            </div>
            <span className='role'>Community Manager</span>
          </div>

          <div
            className='item-profil'
            data-sal='slide-up'
            data-sal-duration='800'
          >
            <span className='name'>(Relin)</span>
            <div className='pp'>
              <img src={img1} />
            </div>
            <span className='role'>Architect</span>
          </div>

          <div
            className='item-profil'
            data-sal='slide-up'
            data-sal-duration='800'
          >
            <span className='name'>(LeBronJ)</span>
            <div className='pp'>
              <img src={img9} />
            </div>
            <span className='role'>Blockchain Advisor</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
