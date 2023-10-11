import React from "react";
import Page from "../page";
import {Outlet} from "react-router";

function RootLayout() {
    return (
        <Page>
            <Outlet/>
        </Page>
    )
}

export default RootLayout;