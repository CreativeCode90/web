import "./style.css";
const ProductSlider = () => {
  const api = [
    {
      id: 1,
      url: "/public/product/img1.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 2,
      url: "/public/product/img2.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 3,
      url: "/public/product/img3.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 4,
      url: "/public/product/img4.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 5,
      url: "/public/product/img5.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
        id: 6,
        url: "/public/product/img4.jpg",
        title: "RUNNING SHOES at MIN. 40% OFF",
      },
    {
        id: 7,
        url: "/public/product/img4.jpg",
        title: "RUNNING SHOES at MIN. 40% OFF",
      },
  ];
  return (
    <>
      <div className="Product_slider">
        <div className="wrapper_Slider">
          {/* title */}
          <div className="slider_content_flex">
            <p className="slider_heading">Steals of the Season</p>
            {/* slider */}
            
            <div className="slider_box_list">
            {api.map((e) => {
                return (
                  <div className="slider_card" key={e.id}>
                    <div className="slider_img">
                      <img src={e.url} alt="" />
                    </div>
                    <div className="slider_title">{e.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
