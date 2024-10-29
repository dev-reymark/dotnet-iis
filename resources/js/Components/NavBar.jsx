import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
import ApplicationLogo from "./ApplicationLogo";
import { usePage } from "@inertiajs/react";

export default function NavBar({ auth }) {
    const { url } = usePage();

    return (
        <Navbar maxWidth="lg">
            <NavbarBrand>
                <ApplicationLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={url === "/"}>
                    <Link
                        href="/"
                        color={url === "/" ? "primary" : "foreground"}
                    >
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={url === "/projects-all"}>
                    <Link
                        href={route("project.list")}
                        color={
                            url === "/projects-all" ? "primary" : "foreground"
                        }
                    >
                        Projects
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    {auth.user ? (
                        <Button
                            size="sm"
                            as={Link}
                            color="primary"
                            href={route("project.index")}
                        >
                            Back
                        </Button>
                    ) : (
                        <div className="flex gap-2">
                            <Button
                                size="sm"
                                variant="shadow"
                                as={Link}
                                color="primary"
                                href={route("login")}
                            >
                                Log in
                            </Button>
                            <Button
                                size="sm"
                                as={Link}
                                color="warning"
                                variant="flat"
                                href={route("register")}
                                className="hidden md:flex"
                            >
                                Sign up
                            </Button>
                        </div>
                    )}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
