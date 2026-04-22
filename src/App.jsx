import { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid';
import Nv from './Nv';
import SearchBar from './components/SearchBar';
import Table from './components/Table';


const allCards = [
  { title: "Mission 1", desc: "Build responsive navbar", color: "bg-blue-500", img_tag: "Build_responsive_navbar" },
  { title: "Mission 2", desc: "Dark mode toggle", color: "bg-purple-500", img_tag: "Dark_mode_toggle" },
  { title: "Mission 3", desc: "Hero section design", color: "bg-green-500", img_tag: "Hero_section_design" },
  { title: "Mission 4", desc: "Footer component", color: "bg-yellow-500", img_tag: "Footer_component" },
  { title: "Mission 5", desc: "Contact form", color: "bg-red-500", img_tag: "Contact_form" },
  { title: "Mission 6", desc: "Portfolio gallery", color: "bg-indigo-500", img_tag: "Portfolio_gallery" },
];

function App() {
  const [value, setValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(allCards);

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




  // useEffect(() => {
  //   const searchFilter=(input)=>{
      
  //     if (!input.trim()) {
  //       setFilteredCards(allCards)
  //       return;
  //     }
  //     const lower= input.toLowerCase()
  //     const filtered= allCards.filter((card)=>
  //       card.title.toLowerCase().includes(lower) || card.desc.toLowerCase().includes(lower)
  //     )
      
  //     setFilteredCards(filtered)
  //   }
  
  //   const debouncedFn= debounce(searchFilter, 1000)

  //   return debouncedFn(value)

    
  // }, [value])
  

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
      <Table/>
      
    </>
  );
}

export default App;