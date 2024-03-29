import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

const callsToAction = [
  {
    name: "Check Instagram",
    href: "https://instagram.com/bumptoparenthood",
    icon: PlayCircleIcon,
  },
  { name: "Contact me", href: "/appointment", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ services }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesToMap, setServicesToMap] = useState(services);
  const router = useRouter();

  // console.log("NAVBAR SERVICES: ", services);

  useEffect(() => {
    if (services) {
      setServicesToMap(() => {
        return services?.map((item) => ({
          name: item?.title,
          href: item?.slug.current,
          description: item?.text,
        }));
      });
    }
  }, [services]);

  return (
    <header className="bg-gray-100 shadow dark:bg-gray-800 dark:text-rose-300 dark:border-gray-700 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
        style={{ height: "7rem" }}
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 font-bold">
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button
              className={`${
                router.pathname === "/services" && "text-rose-300"
              } flex items-center gap-x-1 text-sm font-semibold leading-6 `}
            >
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full  z-100 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 bg-white dark:bg-gray-700 dark:text-gray-400">
                <div className="p-4">
                  {servicesToMap?.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ArrowRightIcon height={15} />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={`/services/${item?.href}`}
                          className="block font-semibold"
                        >
                          {item?.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-400 text-xs">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-white dark:bg-gray-800 dark:text-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6  hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/blog"
            className={`${
              router.pathname === "/blog" &&
              "text-rose-300 dark:text-gray-300 underline"
            } text-sm font-semibold leading-6 hover:underline`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`${
              router.pathname === "/about" &&
              "text-rose-300 dark:text-gray-300 underline"
            } text-sm font-semibold leading-6 hover:underline`}
          >
            About Me
          </Link>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/appointment"
            className={`${
              router.pathname === "/appointment" &&
              "text-rose-300 dark:text-gray-300 underline"
            } text-sm font-semibold leading-6 hover:underline`}
          >
            Book an Appointment <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden ]"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-800 dark:text-gray-200">
          <div
            className="flex items-center justify-between dark:text-gray-200"
            style={{ height: "4.5rem" }}
          >
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 inline-flex items-center justify-center text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 dark:text-gray-500">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2 dark:text-gray-200">
                        {[...servicesToMap, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={`services/${item.href}`}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50"
                >
                  About Me
                </Link>
              </div>
              <div className="py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/appointment"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50"
                >
                  Book an appointment
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
