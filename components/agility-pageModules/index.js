import RichTextArea from "./RichTextArea";
import FeaturedPost from "./FeaturedPost";
import PostsListing from "./PostsListing";
import PostDetails from "./PostDetails";
import Heading from "./Heading";
import Footer from "./Footer/Footer";
import FooterContent1 from "./Footer/FooterContent1";
import FooterContent2 from "./Footer/FooterContent2";
import FooterContent3 from "./Footer/FooterContent3";
// import FooterComponent from "./Footer/FooterComponent";
import ImageSlider from "./Image-Slider/ImageSlider";
import TextBlockWithImage from "./TextBlockWithImage";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "TextBlockWithImage", module: TextBlockWithImage },
  { name: "Footer", module: Footer },
  // { name: "FooterComponent", module: FooterComponent },
  { name: "FooterContent1", module: FooterContent1 },
  { name: "FooterContent2", module: FooterContent2 },
  { name: "FooterContent3", module: FooterContent3 },
  { name: "ImageSlider", module: ImageSlider },
  { name: "Heading", module: Heading },
  { name: "FeaturedPost", module: FeaturedPost },
  { name: "PostsListing", module: PostsListing },
  { name: "PostDetails", module: PostDetails },
  { name: "RichTextArea", module: RichTextArea },
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};
