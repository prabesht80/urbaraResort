import { Carousel } from 'react-carousel-minimal';

function Gallery() {
  const data = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
      caption: 'Darjeeling',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      caption: 'San Francisco',
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      caption: 'Scotland',
    },
    {
      image:
        'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
      caption: 'Darjeeling',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <div style={{ textAlign: 'center', marginBottom: '20%' }}>
        <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p>
        <div
          style={{
            padding: '0 60px',
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
