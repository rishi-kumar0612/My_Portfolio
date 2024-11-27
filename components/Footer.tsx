import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-bground dark:bg-bground py-8">
  <div className="max-w-7xl mx-auto px-5 lg:px-6 text-center">
    <h3 className="text-lg md:text-xl font-semibold text-white">
      Let’s Build Something Amazing Together!
    </h3>
    <p className="mt-2 text-sm md:text-lg text-neutral-400">
      Thank you for exploring my portfolio. I’m excited to connect with you—whether it’s about new opportunities, collaborations, or just sharing ideas.
    </p>

    {/* Links */}
    <div className="flex justify-center mt-4 space-x-6">
      <a
        href="mailto:rishi.k.st24@gmail.com"
        className="text-spotlight hover:text-white transition"
        aria-label="Email"
      >
        <i className="fas fa-envelope"></i> Email
      </a>
      <a
        href="https://www.linkedin.com/in/rishi-kumar-06"
        className="text-spotlight hover:text-white transition"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
      <a
        href="https://github.com/rishi-kumar0612"
        className="text-spotlight hover:text-white transition"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i> GitHub
      </a>
      <a
        href="https://public.tableau.com/profile/rishi.kumar"
        className="text-spotlight hover:text-white transition"
        aria-label="Tableau"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-chart-bar"></i> Tableau
      </a>
    </div>

    {/* Copyright */}
    <p className="mt-6 text-xs md:text-sm text-spotlight dark:text-white">
      © {new Date().getFullYear()} Rishi Kumar. Built with passion and React. ✨
    </p>
  </div>
</footer>

  )
}

export default Footer