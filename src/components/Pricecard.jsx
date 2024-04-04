import PropTypes from "prop-types";

export default function PriceCards(props={}) {
    const {width, height, background, title, price, items}=props;
    return ( 
        
            <div className="priceCards"
        style={{ width: width, height: height, background:background,}}  >
        <div className="top">
            <h6>{title}</h6>
            <h1>{price}</h1>
            
            <hr />
        </div>
         <div>
        {items.map((element, index) => (
          <p className="priceCardText" style={{color:element.isAvailable ? "black " : "gray" }} key={index}>
            {element.isAvailable ? "✔ " : "✖" } {element.name}
          </p>
        ))}
        </div>
        <button>Button</button>
        
            </div>
            
    
    
            );
        }

            PriceCards.propTypes={
            width:PropTypes.number,
            height:PropTypes.number,
            background:PropTypes.string,
            title:PropTypes.string,
            items:PropTypes.array,
            price:PropTypes.string,
            isAvailable:PropTypes.bool,
        };