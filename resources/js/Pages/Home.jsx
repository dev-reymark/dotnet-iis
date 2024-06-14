import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";
import { Button } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Home" />
            <div className="relative min-h-screen text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex items-center justify-center min-h-screen selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <nav className="-mx-3 flex flex-1 justify-end gap-4">
                            {auth.user ? (
                                <Button
                                    as={Link}
                                    href={route("project.index")}
                                    color="primary"
                                >
                                    Projects
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        as={Link}
                                        href={route("login")}
                                        color="primary"
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        as={Link}
                                        href={route("register")}
                                        color="primary"
                                        variant="ghost"
                                    >
                                        Register
                                    </Button>
                                </>
                            )}
                        </nav>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href={route("project.index")}
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="relative flex w-full flex-1 items-stretch">
                                        <img
                                            src="/assets/img/proj_dir.png"
                                            alt="Laravel documentation screenshot"
                                            className="aspect-video h-full w-full flex-1 rounded-[10px] object-top object-cover drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
                                        />
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div className="flex items-start gap-6 lg:flex-col">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full sm:size-16">
                                                <ApplicationLogo />
                                            </div>

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="uppercase text-xl font-semibold text-black dark:text-white">
                                                    Datalogic Systems
                                                    Corporation
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    We are a leading provider of
                                                    custom software development
                                                    and consulting services. We
                                                    are dedicated to delivering
                                                    high-quality software
                                                    solutions that meet the
                                                    needs of our clients.
                                                </p>
                                            </div>
                                        </div>

                                        <GoArrowRight className="w-20 h-20 text-primary" />
                                    </div>
                                </a>
                            </div>
                            {/* 
                            <div class="max-w-[85rem] mx-auto px-4">
                                <div class="max-w-2xl text-center mx-auto">
                                    <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
                                        Designed for you to get more{" "}
                                        <span class="text-blue-600">
                                            simple
                                        </span>
                                    </h1>
                                    <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                                        Build your business here. Take it
                                        anywhere.
                                    </p>
                                </div>

                                <div class="mt-10 relative max-w-5xl mx-auto">
                                    <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                                    <div class="absolute inset-0 size-full">
                                        <div class="flex flex-col justify-center items-center size-full">
                                            <a
                                                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                                href="#"
                                            >
                                                <svg
                                                    class="flex-shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <polygon points="5 3 19 12 5 21 5 3" />
                                                </svg>
                                                Play the overview
                                            </a>
                                        </div>
                                    </div>

                                    <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
                                        <div class="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
                                    </div>

                                    <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                                        <div class="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
                                    </div>
                                </div>
                            </div> */}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
