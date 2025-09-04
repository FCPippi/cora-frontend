import "../styles/CardModule.css";

function CardModule() {
  return (
    <div className="Card">
      <div className="Card-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ronaldinho_in_2019.jpg/500px-Ronaldinho_in_2019.jpg"
          alt="Ronaldinho gaucho"
        />
      </div>

      <div className="Card-content">
        <h2>CORPO E CONSENTIMENTO</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, nam corrupti blanditiis ad quam incidunt voluptatum, ipsam dicta quo, quisquam commodi nihil officia velit repudiandae ipsum labore consequatur voluptatem odio!
        </p>
        <span className="AgeRange">9-12 anos</span>
      </div>
    </div>
  );
}

export default CardModule;
