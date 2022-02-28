import BibleLogoTwo from "../../components/Icons/BibleLogoTwo";
import DropChevron from "../../components/Icons/DropChevron";
import { Disclosure, Transition } from "@headlessui/react";

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
  return (
    <div className="m-16 flex text-center flex-col font-theme text-2xl">
      <div className="m-4 flex mx-auto" style={{ maxWidth: 720, height: 144 }}>
        <div className="pr-2 leading-none text-right text-5xl font-semibold text-white">
          The
          <br />
          MERN
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
      <a href="/search" className="underline">
        <button className="p-2 m-4 rounded-lg bg-theme-light text-2xl text-theme-dark hover:bg-theme-4 in-expo duration-150">
          Start Reading
        </button>
      </a>
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
                <div style={{ maxWidth: 720 }} className="mx-auto text-white">
                  MERN is the acronym for the tech stack used to create this
                  application:
                </div>
                <ul>{stackItems}</ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
