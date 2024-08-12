import React from 'react';
import './Testimonials.css'; // Import your CSS file

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'John Doe', rating: 5, comment: ' "Eldarce Company has been instrumental in transforming our business operations." ' },
    { id: 2, name: 'Jane Smith', rating: 4, comment: ' "We have been working with Eldarce Company for over two years now, and their commitment to quality and customer satisfaction is unmatched." ' },
    { id: 3, name: 'Michael Johnson', rating: 3, comment: ' "Choosing Eldarce Company was one of the best decisions we made for our business. Their expertise has helped us streamline our operations." ' },
  ];

  return (
    <div className="testimonials-container">
      <div className='testimonial-text'>
        <span>Testimonials</span>
        <h2>Hear what clients say about us</h2>
      </div>

      <div className="testimonial-boxes">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-box">
            <div className="testimonial">
              <div className="rating">
                {[...Array(5)].map((star, index) => (
                  <span key={index} className={index < testimonial.rating ? 'filled' : 'empty'}>
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="comment">{testimonial.comment}</p>
              {/* <p className="name">{testimonial.name}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;







