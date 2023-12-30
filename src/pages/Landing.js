import { useRef } from "react";
import { Link } from "react-router-dom";

import Marketing from "../assets/images/marketing.png";
import Research from "../assets/images/research.png";
import Development from "../assets/images/dev.png";
import Ui from "../assets/images/uiux.png";
import Card from "../components/Card";
import Testimonial from "../components/TestimonialCard";
import Hero from "../assets/images/hero.svg";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const data = [
  {
    title: "Research",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Research,
  },
  {
    title: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Development,
  },
  {
    title: "Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Marketing,
  },
  {
    title: "UI/UX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: Ui,
  },
];

const data2 = [
  {
    num: "300+",
    title: "Lorem Ipsum",
  },
  {
    num: "300+",
    title: "Lorem Ipsum",
  },
  {
    num: "300+",
    title: "Lorem Ipsum",
  },
  {
    num: "300+",
    title: "Lorem Ipsum",
  },
];

const testimonialData = [
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
  {
    name: "John Doe",
    title: "CEO",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "https://i.pravatar.cc/300",
  },
]

function Landing() {
  const swiper = useSwiper();
  const swiperRef = useRef(null);

  return (
    <div className="flex-1 bg-white">
      <div className="bg-primary ">
        <section className="flex flex-col lg:flex-row w-full items-center py-8 lg:py-16 justify-between gap-8 md:gap-0 container min-h-[70vh]">
          <div
            className="flex flex-col gap-4 items-start justify-start text-left"
            style={{ flexBasis: "50%" }}
          >
            <h1 className="text-4xl lg:text-6xl text-white font-bold leading-relaxed lg:leading-normal">
              The quick, brown fox jumps over a lazy dog.
            </h1>
            <p className="  md:max-w-[90%] py-4 text-neutral-300 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link
              to={"/"}
              className="bg-gradient-to-r from-accent to-accent rounded-full p-4 text-white text-center"
            >
              Lorem Ipsum
            </Link>
          </div>
          <div style={{ flexBasis: "55%" }}>
            <div className=" w-full relative">
              <img
                draggable={false}
                className="m-auto p-4 md:p-6 z-10 w-full"
                src={Hero}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col-reverse lg:flex-row w-full py-8 md:py-16 justify-between gap-8 md:gap-0 container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ flexBasis: "50%" }}
        >
          {data.map((item) => (
            <Card {...item} />
          ))}
        </div>
        <div
          className="flex flex-col gap-4 items-start justify-evenly text-left py-8 lg:pl-16"
          style={{ flexBasis: "50%" }}
        >
          <p className="text-accent tracking-[1px] font-semibold items-center gap-2 flex">
            <hr className="w-20 h-1 bg-accent"></hr> Lorem ipsum
          </p>
          <h1 className="text-3xl md:text-5xl text-primary font-semibold md:leading-normal">
          The quick, brown fox jumps over a lazy dog.
          </h1>
          <hr className="w-full border border-neutral-200"></hr>
          <p className="text-sm leading-[1.4rem] md:max-w-[90%] py-4 text-neutral-500 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <Link
            to={"/"}
            className="bg-gradient-to-r from-[rgb(21,165,157)] to-[rgb(21,140,157)] rounded-full p-4 text-white text-center"
          >
            Lorem Ipsum
          </Link>
        </div>
      </section>
      <div className="bg-primary py-20 ">
        <section className="container flex flex-col lg:flex-row gap-8 text-white justify-around items-center">
          {data2.map((item, index) => (
            <>
              <div className="text-center flex flex-col gap-4">
                <h4 className="text-5xl font-semibold">{item.num}</h4>
                <span>{item.title}</span>
              </div>
              {index < data2.length - 1 && (
                <hr className="w-full h-[1px] lg:w-[1px] lg:h-20 bg-neutral-100 opacity-30"></hr>
              )}
            </>
          ))}
        </section>
      </div>
      <section className="flex flex-col-reverse lg:flex-row-reverse w-full py-8 md:py-16 justify-between gap-8 md:gap-0 container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          style={{ flexBasis: "50%" }}
        >
          {data.map((item) => (
            <Card {...item} />
          ))}
        </div>
        <div
          className="flex flex-col gap-4 items-start justify-evenly text-left py-8 lg:pr-16"
          style={{ flexBasis: "50%" }}
        >
          <p className="text-accent tracking-[1px] font-semibold items-center gap-2 flex">
            <hr className="w-20 h-1 bg-accent"></hr> Lorem ipsum
          </p>
          <h1 className="text-3xl md:text-5xl text-primary font-semibold md:leading-normal">
          The quick, brown fox jumps over a lazy dog.
          </h1>
          <hr className="w-full border border-neutral-200"></hr>
          <p className="text-sm leading-[1.4rem] md:max-w-[90%] py-4 text-neutral-500 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <Link
            to={"/"}
            className="bg-gradient-to-r from-primary to-primary rounded-full px-6 p-4 text-white text-center"
          >
            Lorem Ipsum
          </Link>
        </div>
      </section>
      <div className="bg-gradient-to-b from-secondary from-70% to-50% to-white ">
        <section className="flex flex-col lg:flex-row w-full items-center py-8 lg:pt-16 lg:pb-0 justify-between gap-4 md:gap-0 container">
          <div className="flex flex-row gap-16">
            <div className="flex-[70%] space-y-4">
              <p className="text-accent tracking-[1px] font-semibold items-center gap-2 flex">
                <div className="w-20 h-1 bg-accent"></div> Lorem ipsum
              </p>
              <h1 className="text-3xl md:text-5xl text-white font-semibold md:leading-normal">
              The quick, brown fox jumps over a lazy dog.
              </h1>
            </div>
          </div>
          <p className="flex-[45%] w-full text-sm leading-[1.4rem] md:max-w-[90%] py-4 text-neutral-300 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </section>
        <div className="flex flex-row gap-4 items-center justify-between container">
          <hr className="w-full  border border-neutral-200 opacity-30"></hr>
          <div className="inline-flex flex-[50%] gap-4 justify-end items-center">
            <button
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="text-white p-4 rounded-full outline outline-1 outline-white hover:bg-accent hover:outline-none transition-all"
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="text-white p-4 rounded-full bg-accent"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
            820: {
              slidesPerView: 2.5,
              spaceBetween: 50,
            },
            960: {
              slidesPerView: 2.8,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 80,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="container py-16">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-normal text-primary testimonial-title">
          Beloved by so many people worldwide
        </h2>
        <Swiper

            className="w-full testimonial-slider"
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            820: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialData.map((item) => (
            <SwiperSlide className="w-full">
              <Testimonial {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Landing;
