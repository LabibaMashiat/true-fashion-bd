import banner_img from "../../../assets/images/Home/Banner/garments_pic2.jpg"

const Banner = () => {
    return (
       <div
  className="hero h-96 md:min-h-screen opacity-100 max-w-full mx-auto"
  style={{
    backgroundImage:
     `url(${banner_img})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content">
    <div className="max-w-md mt-16 sm:mt-40 py-2">
      <h1 className=" mb-7 text-2xl md:text-5xl font-bold">Empowering Global Fashion Through Ethical Sourcing</h1>
      <p className="lg:mb-12 font-semibold">
      At TRUE FASHION BD, we connect fashion brands with Bangladesh’s finest garment manufacturers — ensuring quality, transparency, and sustainability every step of the way.
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;
