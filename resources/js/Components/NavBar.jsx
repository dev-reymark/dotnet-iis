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

export default function NavBar({ auth }) {
    return (
        <Navbar maxWidth="xl" className="bg-neutral-900">
            <NavbarBrand>
                <ApplicationLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href={route("project.index")}>Projects</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    {auth.user ? (
                        <Button
                            as={Link}
                            color="primary"
                            href={route("project.index")}
                        >
                            Project
                        </Button>
                    ) : (
                        <div className="flex gap-2">
                            <Button
                                as={Link}
                                color="primary"
                                href={route("login")}
                            >
                                Log in
                            </Button>
                            <Button
                                as={Link}
                                color="primary"
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
