import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Badge from './Badge';

const Card = ({ name, ingredients, instructions, category, imageUrl, handleDelete, id }) => {
  return (
    <div className="card p-2 shadow-sm" style={{ maxWidth: '450px' }}>
      <img
        src={imageUrl}
        className="img-fluid mb-3"
        alt={name}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="d-flex align-items-center mb-2 text-muted">
        <img
          src="https://via.placeholder.com/30"
          alt="Admin"
          className="rounded-circle me-2"
        />
        <div>
          Admin &middot; <br />
          Mar 22, 2023 &middot; 2 min read
        </div>
      </div>
      <h5 className="fw-bold">{name}</h5>
      <p className="fw-bold mb-0">Ingredients</p>
      <p className="text-muted" style={{ fontSize: '0.9rem' }}>
        {ingredients}
      </p>
      <p className="fw-bold mb-0">Instructions</p>
      <p className="text-muted" style={{ fontSize: '0.9rem' }}>
        {instructions}
        <Link to={`/recipe/${id}`}>Read More</Link>
      </p>
      <hr />
      <div className="d-flex justify-content-between align-items-center text-muted">
        <span><Badge>{category}</Badge></span>
        <div className="d-flex align-items-center">
          <button
          onClick={() => handleDelete(id)}
            className="btn"
            style={{ border: 'none', background: 'transparent', padding: 0 }}
          >
            <FaTrash color="red" style={{ cursor: 'pointer', fontSize: '1.2rem' }} />
          </button>
          <Link to={`/edit/${id}`} style={{ textDecoration: 'none', marginLeft: '10px' }}>
            <FaEdit color="blue" style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
