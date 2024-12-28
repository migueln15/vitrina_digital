import Image from 'next/image'

const HeroBanner = () => {
  return (
    <>
      <section className="relative h-[300px] md:h-[400px] lg:h-[460px] md:mt-24">
        <Image
          src="/images/banner-01.png?height=360&width=1600"
          alt="Ofertas especiales en electrónica"
          fill
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Ofertas Especiales</h1>
            <p className="text-xl md:text-2xl mb-6">Descubre nuestras increíbles ofertas en electrónica</p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Ver Ofertas
            </Button>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default HeroBanner