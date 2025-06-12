import banner_img from "../../../assets/images/Home/Banner/garments_pic1.jpg"

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
    <div className="max-w-md mt-20 sm:mt-40 py-2">
      <h1 className=" mb-7 text-2xl md:text-5xl font-bold">Your Trusted Garments Sourcing Partner</h1>
      <p className="lg:mb-12 font-semibold">
       We connect global fashion brands with Bangladesh’s top garment factories, ensuring quality, affordability, and timely delivery.
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;