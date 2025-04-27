// eslint-disable-next-line no-unused-vars
import React from 'react'
import RecentPost from '../Components/RecentPost'

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-dark hero-section text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <h1 className="fs-1 fw-bold text-light mb-3 animate__animated animate__fadeInDown">Welcome to My World 🌎</h1>
        <p className="text-light fs-5 mt-2 animate__animated animate__fadeInUp" style={{ maxWidth: '600px' }}>
          Step into a space where ideas spark, stories unfold, and every moment is a journey. ✨ <br /> Let's explore the beauty hidden in everyday life.
        </p>
      </div>

      <div className="container-fluid py-5 bg-light">
        <h2 className="text-center mb-5 fw-bold">Recent Posts</h2>
        <RecentPost />
      </div>
    </>
  )
}
