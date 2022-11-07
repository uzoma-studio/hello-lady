import React from 'react'
import { SuperSEO } from "react-super-seo";

const SEO = () => {
  return (
    <SuperSEO
        title="Hello Lady"
        description="Hello Lady by Lady Donli - Join the Elite Agency"
        lang="en"
        openGraph={{
            ogImage: {
                ogImage: "../../public/Images/hello-lady-bg.jpg",
                ogImageAlt: "Hello Lady by Lady Donli",
                ogImageType: "image/jpeg",
            },
        }}
        twitter={{
            twitterSummaryCard: {
                summaryCardImage: "../../public/Images/hello-lady-bg.jpg",
                summaryCardImageAlt: "Hello Lady by Lady Donli",
                summaryCardSiteUsername: "Hello Lady by Lady Donli - Join the Elite Agency",
            },
        }}
        />
  )
}

export default SEO