const Carousel = props => {
    return <div className="hero-carousel">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" >
        <div className="carousel-inner">
            <div className="carousel-item active" style={{background: 'yellowgreen'}} data-bs-interval="500"></div>
            <div className="carousel-item" style={{"background": "green"}} data-bs-interval="500"></div>
            <div className="carousel-item"  style={{"background": "greenyellow"}} data-bs-interval="500"></div>
        </div>
        </div>
    </div> 
}

export default Carousel;