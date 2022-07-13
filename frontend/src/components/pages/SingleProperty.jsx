import { useEffect, useState } from "react";
import ImageCarousel from "../misc/ImageCarousel";
import "./SingleProperty.css";

export default function SingleProperty() {
  const [images, setImages] = useState();

  useEffect(() => {
    setImages(
      Array.from(Array(4).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`
      }))
    );
  }, []);

  return (

    <section className="single-property">
        <h1 className='page-heading'>Building Peleza</h1>
        <ImageCarousel images={images} />
        {/* <div className="property-value">
          <h2>VALUE OF NFT</h2>
          <h2 className="cl-blue num">€ 10</h2> <br/>
          <h2>FUNDING OBJECTIVES</h2>
          <h2 className="cl-blue num">€ 473 750</h2>
        </div> */}
        <div className="info-button">
          <div className="infos">
            <div className="info1">
              <h3>Target Profitability</h3>
              <h3 className="cl-blue num">10.35%</h3>
            </div>
            <div className="info2">
              <h3>Objective of returned revenues</h3>
              <h3 className="cl-blue num">5.37%</h3>
            </div>
            <div className="info3">
              <h3>Valuation of the property</h3>
              <h3 className=" cl-blue num">€ 473 750</h3>
            </div>
          </div>
          <button className="buy-button">Buy your NFT</button>
        </div>
    </section>
  );
}