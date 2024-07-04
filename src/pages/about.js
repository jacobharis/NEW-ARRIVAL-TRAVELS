import React from "react"
import MasterLayout from "../components/master-layout"
import Content from "../components/content"
import CommonHero from "../components/common-hero"

const AboutPage = () => {
  return (
    <MasterLayout>
      <CommonHero>
        <h1>About Us</h1>
      </CommonHero>
      <Content>
        <h1>This is About Section</h1>
      </Content>
    </MasterLayout>
  )
}

export default AboutPage
