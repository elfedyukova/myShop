import React from "react";
import { Navbar, Button, Dropdown, Text, Card, Radio, Popover } from "@nextui-org/react";
import { useAppContext } from "../contexts/appcontext";
import Link from 'next/link';


export default function CustomNavbar() {
    const { cartItems, categories } = useAppContext();

    console.log(categories);

    return (

        <Navbar variant="static">
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                {categories.length ?
                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                auto
                                light
                                css={{
                                    px: 0,
                                    dflex: "center",
                                    svg: { pe: "none" },
                                }}
                                ripple={false}
                            >
                                Categories
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="ACME features"
                            css={{
                                $$dropdownMenuWidth: "340px",
                                $$dropdownItemHeight: "70px",
                                "& .nextui-dropdown-item": {
                                    py: "$4",
                                    // dropdown item left icon
                                    svg: {
                                        color: "$secondary",
                                        mr: "$4",
                                    },
                                    // dropdown item title
                                    "& .nextui-dropdown-item-content": {
                                        w: "100%",
                                        fontWeight: "$semibold",
                                    },
                                },
                            }}
                        >
                            {categories.map((cat, idx) => (

                                <Dropdown.Item key={`cat-${idx}`}>
                                    <Link href={`/category/${cat}`}><a>{cat}</a></Link>
                                </Dropdown.Item>

                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    : null}
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link isActive href="#">Customers</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>

                <Navbar.Item>
                    <Popover placement="bottom-right">
                        <Popover.Trigger>
                            <Button auto flat>Корзина</Button>
                        </Popover.Trigger>
                        <Popover.Content>
                            <Text css={{ p: "$10" }}>Товаров в корзине - {cartItems.length} шт</Text>
                        </Popover.Content>
                    </Popover>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>


    )
}
