import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import HeroSlider from '../components/HeroSlider';
import ImageSlider from '../components/ImageSlider';
const Home = () => {
  const [mounted, setMounted] = useState(false);
  
  // Sample recipes data
  const recipes = [
    {
      id: 1,
      title: 'Homemade Pizza',
      author: 'John Doe',
      image: 'https://via.placeholder.com/300',
      description: 'Delicious homemade pizza recipe...'
    },
    {
      id: 2,
      title: 'Chocolate Cake',
      author: 'Jane Smith',
      image: 'https://via.placeholder.com/300',
      description: 'Decadent chocolate cake recipe...'
    },
    // Add more recipes
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="home-page">
      <HeroSlider />
      
      <div className={`container mt-4 latest-recipes ${mounted ? 'slide-up' : ''}`}>
        <h2 className="mb-4 delay-1">Latest Recipes</h2>
        <div className="row delay-2">
          {recipes.map(recipe => (
            <div className="col-md-4 mb-4" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;



