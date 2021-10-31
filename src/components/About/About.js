import React from "react";
import paragliding from "../../images/paragliding.png";
import route from "../../images/route.png";
import tourGuide from "../../images/tour-guide.png";
import map from "../../images/map.png";
import aboutImg from "../../images/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center my-5">
        <div className="col-md-6">
          <div className="row justify-content-between align-items-center g-4">
            <div className="col-lg-6">
              <div className="card">
                <img
                  src={paragliding}
                  className="card-img-top w-25 pt-2 d-block mx-auto"
                  alt="paragliding"
                />
                <div className="card-body">
                  <h6 className="card-title">Activities</h6>
                  <small className="card-text text-secondary">
                    A small river named Duden flows by their place and supplies
                    it with the necessary
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <img
                  src={route}
                  className="card-img-top img-fluid w-25 pt-2 d-block mx-auto"
                  alt="route"
                />
                <div className="card-body">
                  <h6 className="card-title">Travel Arrangements</h6>
                  <small className="card-text text-secondary">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <img
                  src={tourGuide}
                  className="card-img-top w-25 pt-2 d-block mx-auto"
                  alt="tour Guide"
                />
                <div className="card-body">
                  <h6 className="card-title">Private Guide</h6>
                  <small className="card-text text-secondary">
                    Separated they live in Bookmarksgrove right at the coast
                    large language ocean.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <img
                  src={map}
                  className="card-img-top w-25 pt-2 d-block mx-auto"
                  alt="map"
                />
                <div className="card-body">
                  <h6 className="card-title">Location Manager</h6>
                  <small className="card-text text-secondary">
                    We can manage your dream building A small river named Duden
                    flows by their place
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-md-0 pt-3">
          <h1 className="text-dark fw-bold">
            Make Your Tour Memorable and Safe With Us
          </h1>
          <small className="text-secondary my-4 d-block">
            Every detail considered. Every moment perfected. Reimagine how you
            move, eat, and regenerate on a journey that nourishes your mind,
            body, and soul. Trips are meticulously planned and led by top global
            talent and local experts to unlock your fullest potential. Each
            adventure starts with pre-departure fitness programs to ready you
            for the performance ahead. “The coordinators helped me to prepare
            for the trip in advance and managed all the details and logistics
            flawlessly when we were in Morocco. The attention to detail and
            special extras made the trip truly exceptional and memorable.” — S.
            GORSKI
          </small>
          <Link
            to="/destinations"
            className="btn btn-home mt-3 rounded-3 text-center"
          >
            Search Destination
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section>
        <h1 className="text-color text-center fw-bold">FAQ</h1>
        <div className="row justify-content-center my-5 align-items-center">
          <div className="col-md-6">
            <img
              className="img-fluid rounded-home"
              src={aboutImg}
              alt="aboutImg"
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-4">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How do you manage to travel the world?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We created ghurbo on Instagram on our first big backpack
                    trip (Nov 2015) and started posting almost daily. At the end
                    of this trip GoPro featured one of our photos. We went back
                    to our corporate jobs (which we did love ❤️ by the way!) and
                    started the blog (May 2016) where we post weekly, kept on
                    posting daily on Instagram and traveled after every 12 weeks
                    of working at our jobs. About 1 year later (May 2017) we
                    were working about 80 hours a week each. 40 at our corporate
                    jobs and 40 on Salt in our Hair in the evenings and
                    weekends.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How did you build and market your blog?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    In the Netherlands, we graduated school, in the creative
                    industry as a graphic designer and web developer. Nick has 7
                    years of web development experience and Hannah about 3 years
                    in Graphic Design. We had the skills, so it was an obvious
                    decision to start a travel blog. We launched our travel blog
                    in May 2016. It took us a year to really get it out there,
                    which was pretty frustrating sometimes. Nick writes most of
                    the blogs and Hannah makes sure all the visuals are on
                    point.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What Gear & Software do you use?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Please remember that gear isn't the key to making good
                    content. Creativity, dedication, and trust are. We are now
                    able to buy better gear but that didn’t gave us our first
                    successes at all! Here’s what we used over the years. Now
                    Take a look inside our bag: Travel Photography Camera Year 1
                    & 2 It all started with a GoPro Hero 4 Silver. Our photos
                    and videos of year one are all made with that bad boy. Year
                    2 we bought a Sony A6300 + 16-50mm kit lens. (Highly
                    recommended this combination for its price!)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
