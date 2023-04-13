import React from "react";
import Review from "./Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " absolute right-2 top-1/2 transform -translate-y-1/2"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
       Next
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className + " absolute left-2 top-1/2 transform -translate-y-1/2"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
       Prev
      </div>
    );
  }

function ReviewSection({reviews}) {
//   const reviews = [
//     {
//       name: "John Doe",
//       image: "/john-doe.png",
//       comment:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non diam diam. Etiam euismod ipsum vel augue tristique, at varius urna tristique.",
//     },
//     {
//       name: "Jane Doe",
//       image: "/jane-doe.png",
//       comment:
//         "Mauris sit amet augue et elit congue maximus. Ut at lacus at magna iaculis malesuada ut vel quam. Fusce quis blandit nisl.",
//     },
//     {
//       name: "Bob Smith",
//       image: "/bob-smith.png",
//       comment:
//         "Pellentesque posuere nisl vel tellus congue, eget interdum purus gravida. Praesent posuere felis eu ex malesuada, non fringilla velit commodo.",
//     },
//     {
//         name: "Bob Smith",
//         image: "/bob-smith.png",
//         comment:
//           "Pellentesque posuere nisl vel tellus congue, eget interdum purus gravida. Praesent posuere felis eu ex malesuada, non fringilla velit commodo.",
//       },
//       {
//         name: "Bob Smith",
//         image: "/bob-smith.png",
//         comment:
//           "Pellentesque posuere nisl vel tellus congue, eget interdum purus gravida. Praesent posuere felis eu ex malesuada, non fringilla velit commodo.",
//       },
//   ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableHeight:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="max-w-screen-full p-5 my-5 mx-auto px-4 py-8 bg-rose-200 w-full review-section">
      <h2 className="text-3xl font-semibold mb-8 text-center text-white dark:text-gray-800">Reviews</h2>
      <Slider {...settings} className="m-10">
        {reviews.map((review) => (
          <div key={review._id} className="px-4">
            <Review {...review} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReviewSection;


  