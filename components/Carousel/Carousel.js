const banners = [
    {
        url: '/assets/images/mbanner-1.jpg',
        altText: 'finance banner'
    },
    {
        url: '/assets/images/mbanner-2.jpg',
        altText: 'planning banner'
    },
    {
        url: '/assets/images/mbanner-3.jpg',
        altText: 'debt banner'
    },
]

const Carousel = props => {
    return <div className="hero-carousel">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" >
        <div className="carousel-inner">
            {banners.map((b, index) => <div className={`carousel-item ${ index === 0 ? 'active' : ''}`} data-bs-interval="2000" key={index}>
                <img className="carousel-banner" src={b.url} alt={b.altText} />
            </div>)}
        </div>
        </div>
    </div> 
}

export default Carousel;