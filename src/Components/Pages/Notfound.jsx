import React from 'react';
import { Page } from "../App/Layout/Page";

export const Notfound = () => {

    const path = window.location.href;

    const url = path.substring(path.lastIndexOf("/") + 1);

    return <Page title={`siden ${url} blev ikke fundet`} description="denne side ikke fundet">
        side {url} 401 - not found</Page>
}
