import "./Logo.css";
import "./Card.css";
import "./App.css";

const tempData = [
  {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    strCategoryDescription:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients.",
  },
  {
    idCategory: "2",
    strCategory: "Chicken",
    strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
    strCategoryDescription:
      "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
  },
  {
    idCategory: "3",
    strCategory: "Dessert",
    strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
    strCategoryDescription:
      "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
  },
];

function App() {
  return (
    <div className="app-container">
      <div className="top-sec">
        <Logo />
        <SearchBar />
      </div>
      <div className="main-sec">
        <Card tempData={tempData} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <img
        className="logo_img"
        src=".\Images\Designer-3.png"
        alt="Foodalicious Logo"
      ></img>
    </div>
  );
}

function SearchBar() {
  return (
    <>
      <input
        type="search"
        className="search-container"
        placeholder="Search food"
      ></input>
    </>
  );
}

function Card({ tempData }) {
  return (
    <ul className="card_list">
      {tempData.map((data) => (
        <CardListItem key={data.idCategory} data={data} />
      ))}
    </ul>
  );
}

function CardListItem({ data }) {
  return (
    <li className="card_list--item">
      <h2>{data.strCategory}</h2>
      <img src={data.strCategoryThumb} alt={data.strCategory} />
      <p>{data.strCategoryDescription}</p>
    </li>
  );
}

export default App;
