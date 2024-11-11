import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="container my-4">
      <div className="row justify-content-center" style={{ gap: '2.5rem' }}>
        
        {/* First Card */}
        <div className="col-md-4 card p-2 shadow-sm mb-4" style={{ maxWidth: '450px' }}>
          <img
            src="https://images.pexels.com/photos/27363857/pexels-photo-27363857/free-photo-of-top-view-of-a-pie-with-berries.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="img-fluid mb-3"
            alt="Christmas Cake"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="d-flex align-items-center mb-2 text-muted">
            <img
              src="https://via.placeholder.com/30"
              alt="Admin"
              className="rounded-circle me-2"
            />
            <div>
                Admin &middot; <br/>
                Mar 22, 2023 &middot; 2 min read</div>
          </div>
          <h5 className="fw-bold">Miracle no-knead bread</h5>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            Create a blog post subtitle that summarizes your post in a few short, punchy sentences
            and entices your audience to continue reading....
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-center text-muted">
            <span>0 views</span>
            <div className="d-flex align-items-center">
              <FaHeart color="red" />
              <span className="ms-1">9</span>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-4 card p-2 shadow-sm mb-4" style={{ maxWidth: '450px' }}>
          <img
            src="https://images.pexels.com/photos/27363857/pexels-photo-27363857/free-photo-of-top-view-of-a-pie-with-berries.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="img-fluid mb-3"
            alt="Italian Inspiration"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="d-flex align-items-center mb-2 text-muted">
            <img
              src="https://via.placeholder.com/30"
              alt="Admin"
              className="rounded-circle me-2"
            />
            <div>
                Admin &middot; <br />
                Mar 22, 2023 &middot; 1 min read
            </div>
          </div>
          <h5 className="fw-bold">Italian inspiration on a budget</h5>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            Create a blog post subtitle that summarizes your post in a few short, punchy sentences
            and entices your audience to continue reading....
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-center text-muted">
            <span>0 views</span>
            <div className="d-flex align-items-center">
              <FaHeart color="red" />
              <span className="ms-1">4</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
