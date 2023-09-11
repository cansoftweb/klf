import MainBanner from "@/components/modules/home/MainBanner"
import MainCategory from "@/components/modules/home/MainCategory"
import MainClass from "@/components/modules/home/MainClass"
import MainContact from "@/components/modules/home/MainContact"
import MainCountBanner from "@/components/modules/home/MainCountBanner"
import MainVideo from "@/components/modules/home/MainVideo"

export default function Home() {
  return (
    <>
      <MainBanner />

      <MainCategory />
      
      <MainClass />

      <MainCountBanner />

      <MainVideo
        title="무료 강의"
      />

      <MainVideo
        title="신규 강의"
      />

      <MainContact />

    </>
  )
}
