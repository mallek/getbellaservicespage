---
layout: page
title: Portfolio
permalink: /portfolio/
---

<div class="portfolio-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Our Work</h1>
                <p class="lead">See the transformation we bring to your property with our restoration services.</p>
            </div>
        </div>

        <div class="row portfolio-gallery">
            <!-- Portfolio Item 1 -->
            <div class="col-md-6 portfolio-item">
                <div class="portfolio-card">
                    <div class="portfolio-image">
                        <img src="{{ site.baseurl }}/assets/images/portfolio9.jpg" class="img-responsive" alt="Restoration Project">
                        <div class="portfolio-overlay">
                            <div class="portfolio-caption">
                                <h3>Water Damage Restoration</h3>
                                <p>Before and After</p>
                                <a href="{{ site.baseurl }}/assets/images/portfolio9.jpg" class="portfolio-link" data-lightbox="portfolio">
                                    <i class="fa fa-search-plus"></i> View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- More portfolio items will be added here -->
        </div>
    </div>
</div>

<!-- Add this to your main CSS file -->
<style>
.portfolio-section {
    padding: 60px 0;
    background-color: #f9f9f9;
}

.portfolio-gallery {
    margin-top: 30px;
}

.portfolio-card {
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.portfolio-card:hover {
    transform: translateY(-5px);
}

.portfolio-image {
    position: relative;
    overflow: hidden;
}

.portfolio-image img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(44, 62, 80, 0.85); /* Dark blue with transparency */
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.portfolio-card:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-card:hover img {
    transform: scale(1.1);
}

.portfolio-caption {
    text-align: center;
    color: white;
    padding: 20px;
}

.portfolio-caption h3 {
    margin: 0 0 10px;
    font-size: 1.5em;
}

.portfolio-caption p {
    margin: 0 0 15px;
    font-size: 1.1em;
}

.portfolio-link {
    display: inline-block;
    padding: 8px 20px;
    background: white;
    color: #2c3e50; /* Dark blue to match overlay */
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.portfolio-link:hover {
    background: #f8f8f8;
    color: #2c3e50;
    text-decoration: none;
    transform: translateY(-2px);
}

.portfolio-link i {
    margin-right: 5px;
}
</style>

<!-- Add this to your main JavaScript file or create a new one -->
<script>
$(document).ready(function() {
    // Initialize lightbox
    $('.portfolio-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });
});
</script> 