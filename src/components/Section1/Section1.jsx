import Card from "../Card/Card";
import "./Section1.css";

const Section1 = () => {
  const CardItems = [
    {
      Image: "/public/img/1.png",
      name: "Alec Whitten • 1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      content:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      Image: "/public/img/2.png",
      name: "Demi WIlkinson • 1 Jan 2023",
      title: "PM mental models",
      content:
        "Mental models are simple expressions of complex processes or relationships.",
    },
    {
      Image: "/public/img/3.png",
      name: "Candice Wu • 1 Jan 2023",
      title: "What is Wireframing?",
      content:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    },
    {
      Image: "/public/img/4.png",
      name: "Natali Craig • 1 Jan 2023",
      title: "How collaboration makes us better designers",
      content:
        "Collaboration can make our teams stronger, and our individual designs better.",
    },
    {
      Image: "/public/img/5.png",
      name: "Drew Cano • 1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      content:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
    },
    {
      Image: "/public/img/6.png",
      name: "Orlando Diggs • 1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      content:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
    },
  ];
  return (
    <section className="sec1">
      <h1>All Blog Posts</h1>
      <div className="container">
        {CardItems?.map((card, index) => {
          return (
            <Card
              key={index}
              Image={card.Image}
              name={card.name}
              title={card.title}
              content={card.content}
            />
          );
        })}
      </div>
      
    </section>
  );
};

export default Section1;
