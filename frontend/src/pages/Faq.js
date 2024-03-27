import React from "react";
import "./Faq.css"; // Ensure your CSS file is correctly linked

const FAQ = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h3 className="text-center">Frequently Asked Questions</h3>
            <p className="text-center mt-3 mb-5">
              Your questions matter to us. Dive into our FAQs to learn more
              about how we're creating a sustainable fashion future together.
              Discover how you can contribute to reducing fast fashion's impact,
              ensure the quality of your purchases, and support local
              communities—all through the power of second-hand clothing.
            </p>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Why is supporting local businesses and sellers important to
                    GreenThreads?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                >
                  <div className="accordion-body">
                    At GreenThreads, our mission is driven by a commitment to
                    sustainability and a passion for positive change in the
                    fashion industry. We recognize the significant environmental
                    impact of fast fashion, including waste and excessive
                    resource consumption. By facilitating access to second-hand
                    clothing from small, local businesses and individual
                    sellers, we aim to reduce waste, support local economies,
                    and promote a more sustainable lifestyle. Our work is rooted
                    in the belief that fashion can be both stylish and
                    sustainable, and we're dedicated to proving that every day
                    by offering environmentally friendly fashion choices that
                    make a difference for our planet.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    How does GreenThreads promote sustainable fashion?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body">
                    GreenThreads is dedicated to reducing the environmental
                    impact of fast fashion by connecting consumers with a
                    curated selection of second-hand clothing from small, local
                    businesses and individual sellers. This approach not only
                    extends the life of garments but also supports local
                    economies and reduces waste.
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
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
                    Can I sell my clothing through GreenThreads?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                >
                  <div className="accordion-body">
                    While GreenThreads itself does not directly buy or sell
                    clothing, we facilitate connections between sellers and
                    eco-conscious consumers. If you're a small business or
                    individual seller with high-quality second-hand clothing, we
                    encourage you to join our network.
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
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
                    What types of clothing does GreenThreads focus on?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                >
                  <div className="accordion-body">
                    Our focus is on promoting the longevity and reuse of
                    high-quality, second-hand clothing across all categories.
                    From everyday wear to unique vintage finds, our aim is to
                    provide sustainable fashion choices that cater to diverse
                    tastes and needs.
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How can I ensure the quality of items bought through
                    GreenThreads?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                >
                  <div className="accordion-body">
                    Quality is paramount in our mission. We partner with trusted
                    sellers known for their high standards and authentic items.
                    Furthermore, we encourage open communication between buyers
                    and sellers to ensure satisfaction with every transaction.
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How does shopping second-hand benefit the environment?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                >
                  <div className="accordion-body">
                    Shopping second-hand significantly reduces the demand for
                    new clothing production, which in turn decreases water
                    usage, carbon emissions, and waste. By extending the
                    lifecycle of clothing, we can collectively make a
                    substantial positive impact on the environment.
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <a className="btn btn-primary shadow" href="https://devpost.com/software/greenthreads?ref_content=my-projects-tab&ref_feature=my_projects">
                Read Our Full FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
