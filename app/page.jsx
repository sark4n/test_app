'use client'
import Feed from "@components/Feed"
import MainHeader from "@components/MainHeader"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <MainHeader/>
      <Feed/>
    </section>
      )
}

export default Home