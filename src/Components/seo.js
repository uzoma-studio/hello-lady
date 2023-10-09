import React from 'react'
import { SuperSEO } from "react-super-seo";

const SEO = () => {
  return (
    <SuperSEO
        title="Pan African Rockstar Club ID"
        description="Get your ID and join the Pan-African Rockstar Club"
        lang="en"
        openGraph={{
            ogImage: {
                ogImage: "../../public/Images/hello-lady-bg.jpg",
                ogImageAlt: "Pan African Rockstar Club ID",
                ogImageType: "image/jpeg",
            },
        }}
        twitter={{
            twitterSummaryCard: {
                summaryCardImage: "../../public/Images/hello-lady-bg.jpg",
                summaryCardImageAlt: "Pan African Rockstar Club ID",
                summaryCardSiteUsername: "Get your ID and join the Pan-African Rockstar Club",
            },
        }}
        />
  )
}

export default SEO