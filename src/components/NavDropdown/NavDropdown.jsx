import { Menu, Transition } from "@headlessui/react";
import HamburgerIcon from "../Icons/HamburgerIcon";

export default function NavDropdown({ user, handleLogout }) {
  return (
    <Menu
      as="div"
      className="absolute right-0 flex flex-col justify-end text-right text-xl text-theme-dark"
    >
      {({ open }) => (
        <>
          {user ? (
            <Menu.Button
              as="button"
              className="absolute top-0 right-0 w-12 h-12 text-white border-4 border-theme-light rounded-full"
            >
              {/* {user.username.split(" ")[0][0]} */}
              {user?.username?.split(" ")[0][0] ?? ""}
            </Menu.Button>
          ) : (
            <Menu.Button as="button" className="absolute top-0 right-0">
              <HamburgerIcon />
            </Menu.Button>
          )}
          <Transition
            show={open}
            enter="transition duration-200 in-expo"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 out-expo"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="p-4 mt-16 text-white bg-theme-dark bg-opacity-60 border-4 border-theme-light rounded-lg">
              {user ? (
                <div>
                  <Menu.Item disabled as="p">
                    {user.username}
                    <br />
                    {user.email}
                  </Menu.Item>
                  <Menu.Item as="p" className="hover:text-theme-4">
                    <a href="/saved">My Saved Verses</a>
                  </Menu.Item>
                  <Menu.Item as="p">
                    <a
                      href="/logout"
                      className="hover:text-theme-4"
                      onClick={handleLogout}
                    >
                      Log Out
                    </a>
                  </Menu.Item>
                </div>
              ) : (
                <div>
                  <Menu.Item as="p" className="hover:text-theme-4">
                    <a href="/login">Log In</a>
                  </Menu.Item>
                  <Menu.Item as="p" className="hover:text-theme-4">
                    <a href="/signup">Sign Up</a>
                  </Menu.Item>
                </div>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
