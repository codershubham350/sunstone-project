import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = (props) => {
  console.log("Image Slider", props);
  const { media } = props.module.fields.images;
  const images = media.map((item) => ({
    url: item.url,
  }));
  return (
    <div>
      <SimpleImageSlider
        width={1250}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ImageSlider;
