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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit olutpat
              tempor.
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button
  className="accordion-button collapsed" // Ensure 'collapsed' is present for collapsed items
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#collapseOne"
  aria-expanded="false" // This should be 'false' for items that start collapsed
  aria-controls="collapseOne"
>
                    How does App help people in problems?
                  </button>
                </h2>
                <div
  id="collapseOne"
  className="accordion-collapse collapse"
  aria-labelledby="headingOne"
>
  <div className="accordion-body">
    <strong>This is the first item's accordion body.</strong> It
    is shown by default, until the collapse plugin adds the
    appropriate classes...
  </div>
</div>

              </div>

              {/* Accordion item 2 */}
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
                    What happens if I go over my subscription limits?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  // Removed data-bs-parent attribute
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    Lorem ipsum dolor sit amet...
                  </div>
                </div>
              </div>

              {/* Add more accordion items as needed */}
            </div>
            <div className="text-center mt-4">
              <a className="btn btn-primary shadow" href="#">
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
