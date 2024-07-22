import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg mb-6">
        This is a minimal web application that you can easily modify and build upon.
        It's designed to be a starting point for your projects.
      </p>
      <Button asChild>
        <Link to="/about">Learn More</Link>
      </Button>
    </div>
  );
};

export default Index;