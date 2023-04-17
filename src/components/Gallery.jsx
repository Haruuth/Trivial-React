export default function Gallery(props) {
  
  const arrayAnime = props.array;
  console.log(arrayAnime)
  
    return (
    <div>
      {arrayAnime.map((array, index) => (
        <div key={index}>
          <img width="450"
            src={array.attributes.posterImage.original}
            alt={array.attributes.canonicalTitle}
          />
          <h2>{array.attributes.canonicalTitle}</h2>
        </div>
      ))}
    </div>
  );
}
