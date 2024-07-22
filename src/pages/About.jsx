const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="mb-4">
        This is a bare-bones React application created as a starting point for your projects.
        It includes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>React for building user interfaces</li>
        <li>React Router for navigation</li>
        <li>shadcn-ui for pre-built components</li>
        <li>Tailwind CSS for styling</li>
      </ul>
      <p>
        Feel free to modify this page and add more components as needed for your project!
      </p>
    </div>
  );
};

export default About;