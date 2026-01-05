function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white p-4 flex flex-col md:flex-row md:justify-between gap-4">
        <a href="#" className="font-semibold">Home</a>
        <a href="#" className="font-semibold">Features</a>
        <a href="#" className="font-semibold">Contact</a>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="text-center p-8">
        <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500
                       text-xl md:text-3xl lg:text-5xl">
          Tailwind CSS Basics
        </h2>

        <img
          src="https://assess.masaischool.com/static/media/masaiLogo.379f044bf47b18b78754fe21cd0d2fe3.svg"
          alt="hero"
          className="mx-auto mt-6 rounded-lg shadow-lg
                     transition transform hover:scale-105"
        />
      </section>

      {/* ================= BUTTON ================= */}
      <div className="text-center mb-10">
        <button className="
          bg-gray-200
          hover:bg-gray-300
          active:bg-gray-400
          rounded-lg
          px-6 py-2
          transition">
          Click Me
        </button>
      </div>

      {/* ================= LIST ================= */}
      <ul className="list-disc list-inside pl-5 max-w-md mx-auto mb-10">
        <li className="hover:text-blue-600">Tailwind Utilities</li>
        <li className="hover:text-blue-600">Responsive Design</li>
        <li className="hover:text-blue-600">Clean UI</li>
      </ul>

      {/* ================= FEATURES GRID ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Feature {item}</h3>
            <p>Simple card using Tailwind CSS.</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded">
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto p-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((row, i) => (
              <tr
                key={row}
                className={`hover:bg-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="border p-2">User {row}</td>
                <td className="border p-2">Developer</td>
                <td className="border p-2">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= FORM ================= */}
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow mb-10">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>

    </div>
  );
}

export default App;
