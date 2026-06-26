import { useState, useEffect } from 'react';
import './styles/main.scss';
import CardGrid from './components/CardGrid';
import Nv from './Nv';
import SearchBar from './components/SearchBar';
import UsersTable from './components/UsersTable';
import PomodoroTimer from './components/PomodoroTimer';
import ContactForm from './components/ContactForm';
import PhotoGallery from './components/PhotoGallery';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';

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
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({});
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
    const errors: { name?: string; email?: string } = {};

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

    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Nv />

        <main className=" max-w-7xl mx-auto md:px-10 px-20 py-8">
          {/* Hero Section */}
          <div className="text-center py-12">
            <h1 className="text-5xl font-bold mb-4">My Grok Level Journey</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Building my way to Senior Frontend Developer
            </p>
          </div>

          {/* Missions Card Grid */}
          <section className="mb-20">
            <div className=' mb-8 flex items-center lg:gap-2 sm:gap-6 gap-8 '>
              {/* Mission icon */}
              <svg className='w-fit lg:size-6 sm:size-12 size-16' version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32" xml:space="preserve" style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10
                }}>

                <line className="st0" x1="16" y1="16" x2="22" y2="10" />
                <polygon className="st0" points="30,6 26,6 26,2 22,6 22,10 26,10 " />
                <circle className="st0" cx="16" cy="16" r="6" />
                <path className="st0" d="M27,9c1.3,2,2,4.4,2,7c0,7.2-5.8,13-13,13S3,23.2,3,16S8.8,3,16,3c2.6,0,5,0.7,7,2" />
              </svg>
              <h2 className=" w-fit lg:text-2xl sm:text-5xl text-7xl font-bold  tracking-tight">Missions</h2>
            </div>
            <CardGrid cards={allCards} />
          </section>

          {/* Users Table */}
          <section className="mb-20">
            <div className=' mb-8 flex items-center lg:gap-2 sm:gap-6 gap-8'>
              {/* Users Icon */}
              <svg className='w-fit! lg:size-6 sm:size-12 size-16' fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h2 className="w-fit lg:text-2xl sm:text-5xl text-7xl font-bold  tracking-tight">Users Data</h2>
            </div>
            <ErrorBoundary>
              <UsersTable />
            </ErrorBoundary>
          </section>

          {/* Image Gallery */}
          <section className="mb-20">
            <div className='mb-8 flex items-center lg:gap-2 sm:gap-6 gap-8'>

              {/* Image icon */}
              <svg className='w-fit lg:size-6 sm:size-12 size-16' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14.1901M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8482 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5865L15.7901 12.4679C16.4651 11.9279 17.4053 11.8856 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5302L20 14.1901M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h2 className="w-fit lg:text-2xl sm:text-5xl text-7xl font-bold  tracking-tight">Inspiration Gallery</h2>
            </div>
            <PhotoGallery />
          </section>

          {/* Pomodoro Timer */}
          <section className="mb-20">
            <div className='mb-8 flex items-center lg:gap-2 sm:gap-6 gap-8'>
              {/* Promodo icon */}
              <svg className='w-fit lg:size-6 sm:size-12 size-16' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13h4v1h-5V7h1zM9 2h6V1H9zm13.65 3.916l-2.176 2.177A9.8 9.8 0 1 1 17.6 4.965l2.049-2.049zM12 4.2a8.8 8.8 0 1 0 8.8 8.8A8.81 8.81 0 0 0 12 4.2zm9.236 1.716L19.65 4.33l-1.086 1.086 1.586 1.586z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
              <h2 className="w-fit lg:text-2xl sm:text-5xl text-7xl font-bold tracking-tight">Focus Timer (Pomodoro)</h2>
            </div>
            <PomodoroTimer />
          </section>
        </main>

        <Footer />
      </div>

    </ErrorBoundary >
  );
}

export default App;
