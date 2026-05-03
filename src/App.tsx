import { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid';
import Nv from './Nv';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

// Define types for your data
interface Card {
  title: string;
  desc: string;
  color: string;
  img_tag: string;
}

const allCards: Card[] = [
  { title: "Mission 1", desc: "Build responsive navbar", color: "bg-blue-500", img_tag: "Build_responsive_navbar" },
  { title: "Mission 2", desc: "Dark mode toggle", color: "bg-purple-500", img_tag: "Dark_mode_toggle" },
  { title: "Mission 3", desc: "Hero section design", color: "bg-green-500", img_tag: "Hero_section_design" },
  { title: "Mission 4", desc: "Footer component", color: "bg-yellow-500", img_tag: "Footer_component" },
  { title: "Mission 5", desc: "Contact form", color: "bg-red-500", img_tag: "Contact_form" },
  { title: "Mission 6", desc: "Portfolio gallery", color: "bg-indigo-500", img_tag: "Portfolio_gallery" },
];

function App() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{name?: string; email?: string}>({});
  const [value, setValue] = useState<string>('');
  const [filteredCards, setFilteredCards] = useState<Card[]>(allCards);

  // 🔥 debounce here
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!value.trim()) {
        setFilteredCards(allCards);
        return;
      }

      const lower = value.toLowerCase();
      const filtered = allCards.filter(card =>
        card.title.toLowerCase().includes(lower) ||
        card.desc.toLowerCase().includes(lower)
      );

      setFilteredCards(filtered);
    }, 1000);

    return () => clearTimeout(timer);
  }, [value]);

  const validateForm = (): boolean => {
    const errors: {name?: string; email?: string} = {};
    
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!email.includes('@')) {
      errors.email = 'Please enter a valid email';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', { name, email, message });
      // Here you would normally send data to server
      alert('Form submitted successfully!');
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setFormErrors({});
    }
  };
  

  return (
    <>
      <Nv />

      <SearchBar
        value={value}
        setValue={setValue}
        handleChange={setValue}
        placeholder="Search missions..."
      />
      


      <CardGrid cards={filteredCards} />
      <Table />
    </>
  );
}

export default App;
