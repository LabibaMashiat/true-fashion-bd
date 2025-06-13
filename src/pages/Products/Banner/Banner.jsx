import banner_img from "../../../assets/images/Garments/garments_pic2.webp"

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
      <h1 className=" mb-7 text-2xl md:text-5xl font-bold">Explore Our Diverse Product Line</h1>
      <p className="lg:mb-12 font-semibold">
     From everyday essentials to premium fashion pieces — TRUE FASHION BD delivers quality garments tailored for global brands. Discover styles that blend trend, comfort, and craftsmanship
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;


