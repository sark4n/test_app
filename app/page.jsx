'use client'
import Feed from "@components/Feed"
import MainHeader from "@components/home/MainHeader"
import CTA from "@components/home/CTA"
import Features from "@components/home/Features"
import UseCases from "@components/home/UseCases"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <MainHeader/>
      {/* <Feed/> */}
      <Features/>
      {/* <UseCases/> */}
      <CTA/>
    </section>
      )
}

export default Home