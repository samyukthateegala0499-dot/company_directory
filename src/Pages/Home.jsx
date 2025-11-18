import image from '../assets/modern-equipped-computer-lab.jpg';

const Home = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-white pt-20 relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome to Company Directory
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Browse, filter, and explore a list of companies with ease. Built with React,
          Tailwind CSS, and modern UI components.
        </p>

        <a
          href="/companies"
          className="mt-10 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold shadow-lg transition"
        >
          View Companies
        </a>
      </div>
    </div>
  );
};

export default Home;