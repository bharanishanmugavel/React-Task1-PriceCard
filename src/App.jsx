import PriceCard from "./components/Pricecard";
function App(){
  const data=[
    {
      title:"FREE",
      price:"$0/Month",
      color: "white",
        features: [
          { name: "Single User", isAvailable: true },
          { name: "50GB Storage", isAvailable: true },
          { name: "Unlimited Public Project", isAvailable: true },
          { name: "Community Access", isAvailable: true },
          { name: "Unlimited Private Project", isAvailable: false },
          { name: "Dedicated Phone Support", isAvailable: false },
          { name: "Free Subdomain", isAvailable: false},
          { name: "Monthly Status Report", isAvailable: false },
          
        ],
      },
      {
        title: "PLUS",
        price:"$9/Month",
        color: "white",
        features: [
          { name: "Single User", isAvailable: true },
          { name: "50GB Storage", isAvailable: true },
          { name: "Unlimited Public Project", isAvailable: true },
          { name: "Community Access", isAvailable: true },
          { name: "Unlimited Private Project", isAvailable: true },
          { name: "Dedicated Phone Support", isAvailable: true },
          { name: "Free Subdomain", isAvailable: true},
          { name: "Monthly Status Report", isAvailable: false },
           
        ],
      },
      {
        title: "PRO",
        price:"$49/Month",
        color: "white",
        features: [
          { name: "Single User", isAvailable: true },
          { name: "50GB Storage", isAvailable: true },
          { name: "Unlimited Public Project",isAvailable: true },
          { name: "Community Access", isAvailable: true },
          { name: "Unlimited Private Project", isAvailable: true },
          { name: "Dedicated Phone Support", isAvailable: true },
          { name: "Free Subdomain", isAvailable: true},
          { name: "Monthly Status Report", isAvailable: true },
        ],
      },
    ];
      return (
        <>
        <div className="container">
          {data.map((element, index) => (
            <PriceCard
              key={index}
              width={300}
              height={550}
              background={element.color}
              title={element.title}
              items={element.features}
              price={element.price}
            />
          ))}
          </div>
        </>
      );
      
    }
  

export default App;








