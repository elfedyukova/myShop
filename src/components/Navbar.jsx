import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Popover } from "@nextui-org/react";


export default function CustomNavbar() {
    const [variant, setVariant] = React.useState("static");

    const variants = ["static", "floating", "sticky"];

    return (

        <Navbar isBordered variant={variant}>
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
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
                            <Text css={{ p: "$10" }}>Товаров в корзине - 0 шт</Text>
                        </Popover.Content>
                    </Popover>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>


    )
}
