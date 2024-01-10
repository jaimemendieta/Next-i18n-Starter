import Hero from "@/app/[lang]/components/Hero";

export default function Home({ params }: { params: { lang: string } }) {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero params={{ lang: params.lang }}/>
      </main>
  )
}
