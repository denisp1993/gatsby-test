import React from "react"
import DefaultLayout from '../layouts/Default/'
import SEO from "../components/Seo";

export default () => (
    <DefaultLayout>
        <SEO title={'Pagina About'} description={'super descrzione about!'} />
        <h1>This is the about page</h1>
    </DefaultLayout>
)
