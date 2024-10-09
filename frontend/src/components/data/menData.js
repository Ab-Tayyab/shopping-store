import menShoeBanner1 from "../../assets/photo/men/banner-1.jpeg";
import menClothBanner from "../../assets/photo/men/banner-2.jpeg";
import menShoeBanner2 from "../../assets/photo/men/banner-3.jpeg";
import menSaleBanner from "../../assets/photo/men/banner-4.jpeg";
import menDealBanner from "../../assets/photo/men/banner-5.jpeg";

const menBannerData = [
  {
    mainCategory: "men",
    images: [
      {
        img: menShoeBanner1,
        category: "shoe",
      },
      {
        img: menClothBanner,
        category: "cloth",
      },
      {
        img: menShoeBanner2,
        category: "shoe",
      },
      {
        img: menSaleBanner,
        category: "sale",
      },
      {
        img: menDealBanner,
        category: "deal",
      },
    ],
  },
];

export default menBannerData;
