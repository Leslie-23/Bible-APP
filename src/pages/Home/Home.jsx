import BibleLogoTwo from "../../components/Icons/BibleLogoTwo";
import DropChevron from "../../components/Icons/DropChevron";
import { Disclosure, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

const languages = ["English", "Français", "Español", "Deutsch", "中文"];
const stack = [
  { name: "MongoDB", link: "https://www.mongodb.com/" },
  { name: "Express", link: "https://expressjs.com/" },
  { name: "React", link: "https://reactjs.org/" },
  { name: "Node", link: "https://nodejs.dev/" },
];

const stackItems = stack.map((item, i) => {
  return (
    <li key={i} className="text-theme-light hover:text-theme-4">
      <a href={item.link}>{item.name}</a>
    </li>
  );
});

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState(0); // State for language index

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length); // Cycle through languages
    }, 3000); // Change language every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="mt-24 flex text-center flex-col font-theme text-2xl">
      <div className="m-4 flex mx-auto" style={{ maxWidth: 720, height: 144 }}>
        <div className="pr-2 leading-none text-right text-5xl font-semibold text-white">
          The   
          <br />
          PAL  
          <br />
          Bible
        </div>
        <BibleLogoTwo />
      </div>
      <div className="m-4 text-2xl text-white">
        A King James Version reference
        <br />
        powered by{" "}
        <span className="text-theme-light hover:text-theme-4">
          <a href="https://api.biblesupersearch.com/">BibleSuperSearch</a>
        </span>
      </div>
      <div className="m-4 text-4xl text-white row-span-2">
        <a href="/search" className="underline">
          <button className="p-2 m-4 rounded-lg bg-theme-light text-2xl text-theme-dark hover:bg-theme-4 in-expo duration-150">
            Start Reading
          </button>
        </a>
        <a href="/search" className="underline">
          <button className="p-2 m-4 rounded-lg bg-theme-light text-2xl text-theme-dark hover:bg-theme-4 in-expo duration-150">
            {languages[currentLanguage]} {/* Dynamic language text */}
          </button>
        </a>
      </div>
      <div className="m-4 text-theme-light">
        <a href="/login" className="hover:text-theme-4">
          Log In
        </a>
        <span className="text-white"> or </span>
        <a href="/signup" className="hover:text-theme-4">
          Sign Up
        </a>
      </div>
      <Disclosure as="div" className="m-4 text-center">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center py-2 mx-auto text-theme-light hover:text-theme-4">
              <span className="mr-2">How does it work?</span>
              <DropChevron open={open} />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 in-expo"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 out-expo"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <p style={{ maxWidth: 720 }} className="mx-auto text-white">
                  Anyone, whether logged in or not, can look up and read Bible
                  chapters. Logged-in users can save verses to their personal
                  list. This is done by clicking anywhere on a chapter's text,
                  then clicking "+ [verse number]". Verses can be removed from a
                  user's list by clicking "-".
                </p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="m-4 text-center">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center py-2 mx-auto text-theme-light hover:text-theme-4">
              <span className="mr-2">What is "MERN"?</span>
              <DropChevron open={open} />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 in-expo"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 out-expo"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <p style={{ maxWidth: 720 }} className="mx-auto text-white">
                  MERN is the acronym for the tech stack used to create this
                  application:
                </p>
                <ul>{stackItems}</ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
