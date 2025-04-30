import React, { useState } from "react";
import { Button } from "../../components/ui/button";

const CONTRACT_ADDRESS = "0xA3b12F8E41cD23fFA2dD43C9BDEc97dC8aEf2390";

// Define data for navigation links
const navLinks = [
  { text: "About", href: "#about" },
  { text: "Tokenomics", href: "#tokenomics" },
  { text: "telegram", href: "#telegram" },
  { text: "X (Twitter)", href: "#twitter" },
];

const BrainBoostCoin = (): JSX.Element => {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50 px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <img
            className="w-52 md:w-44 lg:w-[220px]"
            alt="Logo"
            src="/logo.svg"
          />

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <img
                className="size-8 object-contain"
                alt="menu close"
                src="/menu-close.svg"
              />
            ) : (
              <img
                className="size-8 object-contain"
                alt="menu open"
                src="/menu-open.svg"
              />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <img
                  className="w-4 h-7 lg:h-[42px] object-contain lg:object-cover"
                  alt="Line"
                  src="/line-2.png"
                />
                <a
                  href={link.href}
                  className="font-shark text-black text-xl lg:text-2xl"
                >
                  {link.text}
                </a>
                {index === navLinks.length - 1 && (
                  <img
                    className="w-4 h-7 lg:h-[42px] object-contain lg:object-cover"
                    alt="Line"
                    src="/line-2.png"
                  />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 bg-white w-full">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block font-shark text-black text-xl py-2"
              >
                {link.text}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[823px] md:h-[840px]">
          {/* Background images */}
          <div className="absolute inset-0">
            <img
              className="size-full object-cover bg-bottom"
              alt="City"
              src="/city.png"
            />
            <img
              className="absolute top-16 md:top-0 left-0 w-full h-72 md:h-auto object-cover"
              alt="Clouds"
              src="/clouds.png"
            />
          </div>
          <div className="max-w-7xl mx-auto h-full">
            <div className="relative w-full h-full">
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center px-4 lg:items-end h-full">
                <div className="text-center md:text-center mt-16 md:mt-24 lg:mt-36 max-w-2xl">
                  <p className="font-shark text-black text-base md:text-lg lg:text-2xl mb-4">
                    Welcome to Brain boost!
                  </p>
                  <h1 className="font-shark text-black text-4xl md:text-5xl lg:text-[64px] mb-6 md:mb-7 max-w-sm md:max-w-lg lg:max-w-2xl leading-tight">
                    Boosting Brains since 1964
                  </h1>

                  <div className="relative inline-block">
                    <div className="bg-[#fa2a86] w-[260px] h-[51px] rounded-[30px] absolute top-[13px] left-0" />
                    <div className="bg-white w-[260px] h-[51px] rounded-[30px] absolute top-[5px] left-0" />
                    <Button className="bg-black w-[260px] h-[51px] rounded-[30px] relative font-shark text-white text-2xl">
                      Buy $Brain token
                    </Button>
                  </div>
                </div>

                <img
                  className="w-[200px] lg:w-[286px] h-auto absolute bottom-36 lg:bottom-auto lg:top-24 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 -z-10"
                  alt="Download"
                  src="/download-1.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative w-full py-4 md:py-16 lg:h-[950px] md:bg-[url(/bg-2.png)] bg-cover bg-center"
        >
          <div className="relative w-full h-full px-4">
            <div className="max-w-6xl mx-auto relative">
              <div className="flex flex-col md:flex-row items-start justify-end relative">
                {/* Left side with lamp and character */}
                <img
                  className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 top-full lg:top-48 w-64 md:w-[439px] h-auto xl:block md:hidden block z-10"
                  alt="Character"
                  src="/meme1.png"
                />

                {/* Right side with text box */}
                <div className="relative w-full xl:w-[850px] mt-8 lg:mt-0 about-brain-border bg-white">
                  {/* White background */}
                  <div className="relative z-10 px-4 py-5  md:p-7">
                    <h2 className="font-shark text-black text-4xl lg:text-5xl text-center mb-4 lg:mb-8">
                      ABOUT $BRAIN
                    </h2>

                    <div className="space-y-6">
                      <p className="font-shark text-black text-sm lg:text-2xl text-center">
                        Brain Boost ($BRAIN) - boosting brains since 1964. Each
                        buy and sell has a 5% fee that's split to support
                        educational charities and meme-driven impact,
                        contributing to a less retarded future.
                      </p>

                      <p className="font-shark text-black text-sm lg:text-2xl text-center">
                        2.5% goes to brain-related charities - whether it's
                        funding brain tumor research, supporting mental health,
                        or helping with education.
                      </p>

                      <p className="font-shark text-black text-sm lg:text-2xl text-center">
                        2.5% helps us spread the word and grow the $BRAIN
                        community through marketing.
                      </p>
                    </div>

                    <div className="flex items-center justify-center mt-3 md:mt-6 md:flex-row flex-col">
                      <span className="font-shark text-black text-xs md:text-sm address-box-border md:w-auto w-72 overflow-hidden">
                        {CONTRACT_ADDRESS}
                      </span>
                      <button
                        onClick={copyToClipboard}
                        className="p-2 rounded-full transition-colors md:button-box-border flex items-center justify-center gap-2 md:-ml-5 md:w-auto w-full"
                      >
                        <span className="text-black text-sm uppercase border-b border-black md:hidden block font-shark">
                          copy contract address
                        </span>
                        <img
                          className="w-6 h-6"
                          alt="Copy"
                          src="/copy-button.png"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/about-bran-bg-mobile.svg"
              alt="background mobile"
              className="w-full md:hidden block"
            />
          </div>
        </section>

        {/* Tokenomics Section */}
        <section
          id="tokenomics"
          className="relative w-full py-4 overflow-hidden"
        >
          <div className="relative w-full h-full">
            {/* Brick wall background */}
            <img
              className="w-60 lg:w-96 object-cover absolute -left-28 lg:h-auto h-28 lg:-left-5 -top-10 lg:-top-16"
              alt="Brick wall"
              src="/brick-left.svg"
            />

            <img
              className="w-60 lg:w-96 object-cover absolute -right-28 lg:h-auto h-28 lg:-right-5 -top-10 lg:-top-16"
              alt="Brick wall"
              src="/brick-right.svg"
            />

            <div className="relative z-10 px-4 mt-14">
              <h2 className="text-center font-shark text-black text-4xl lg:text-5xl mb-7 lg:mb-8">
                TOKENOMICS
              </h2>

              <div className="text-center mb-8 lg:max-w-none max-w-48 mx-auto">
                <p className="font-shark text-black text-sm lg:text-2xl !leading-[40px]">
                  Every time someone buys or sells,
                  <br className="lg:block hidden" />
                  there's a small
                  <br />
                  <span className="text-xl lg:text-4xl">5% fee</span>
                </p>
              </div>

              <div className="relative w-full max-w-screen-xl mx-auto mt-6">
                <img
                  className="w-full h-auto md:block hidden"
                  alt="Tokenomics diagram"
                  src="/meme-blockchain.png"
                />
                <img
                  className="w-full h-auto md:hidden block"
                  alt="Tokenomics diagram"
                  src="/meme-blockchain-mobile.png"
                />

                <div className="absolute bottom-24 md:bottom-28 lg:bottom-44 left-0 right-0 flex justify-between md:max-w-3xl lg:max-w-5xl mx-auto">
                  <div className="text-center lg:max-w-none max-w-44">
                    <div className="font-shark text-black text-xl md:text-4xl mb-2">
                      2.5%
                    </div>
                    <div className="font-shark text-black text-base md:text-2xl">
                      Brain boosting charities
                    </div>
                  </div>
                  <div className="text-center md:-mt-5  lg:max-w-none max-w-44">
                    <div className="font-shark text-black text-xl md:text-4xl mb-2">
                      2.5%
                    </div>
                    <div className="font-shark text-black text-base md:text-2xl">
                      marketing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="relative w-full py-4 bg-[url(/join-movement-bg.png)] bg-no-repeat bg-cover bg-left">
          <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
              <div className="flex justify-center md:justify-end">
                <div>
                  <div className="text-center">
                    <h2 className="font-shark text-black text-[40px] lg:text-[64px] mb-5 lg:mb-4 leading-tight">
                      join
                      <br />
                      the movement!
                    </h2>
                    <p className="font-shark text-black text-base md:text-2xl leading-relaxed max-w-sm text-center mx-auto">
                      crypto for the un-retardation of future generations
                    </p>
                  </div>

                  {/* Social buttons */}
                  <div className="flex justify-center gap-8 mt-7">
                    <a
                      href="#telegram"
                      className="relative w-16 h-16 bg-white flex items-center justify-center button-box-border"
                    >
                      <img
                        src="/group-2.png"
                        alt="Telegram"
                        className="w-8 h-8"
                      />
                      <span className="w-[calc(100%+15px)] h-2.5 bg-[#FA2A86] rounded-bl-xl rounded-br-xl absolute -left-2 -bottom-6"></span>
                    </a>
                    <a
                      href="#twitter"
                      className="relative w-16 h-16 bg-white flex items-center justify-center button-box-border"
                    >
                      <img src="/group.png" alt="Twitter" className="w-8 h-8" />
                      <span className="w-[calc(100%+15px)] h-2.5 bg-[#FA2A86] rounded-bl-xl rounded-br-xl absolute -left-2 -bottom-6"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="w-full max-w-[660px] h-auto"
                  alt="Meme"
                  src="/meme3-1.png"
                />
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-center mb-16 flex flex-col justify-center max-w-6xl mx-auto mt-10">
              <h3 className="font-shark text-black text-xl md:text-4xl mb-4">
                Disclaimer:
              </h3>
              <p className="font-shark text-black text-base md:text-2xl leading-relaxed px-4">
                $BRAIN has no intrinsic value and was created purely for
                entertainment purposes. It is not intended to be an investment.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="relative w-full">
        <img
          className="w-full h-auto md:h-[455px] object-cover sm:block hidden"
          alt="Footer background"
          src="/footer-copy-1.png"
        />
        <img
          className="w-full h-80 object-cover sm:hidden block"
          alt="Footer background"
          src="/footer-mobile.png"
        />
        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center">
          <p className="font-shark text-black text-xs sm:text-sm">
            © 2025 Brainboost. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BrainBoostCoin;
