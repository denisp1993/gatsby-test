import React from "react"
import DefaultLayout from '../layouts/Default/'
import SEO from "../components/Seo";

export default () => (
    <DefaultLayout>
        <SEO title={'Contacts'} description={'super descrizione contacts!'} />
        <h1>This is the contacts super page</h1>
    </DefaultLayout>
)
