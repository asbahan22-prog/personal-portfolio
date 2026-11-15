import {useState } from 'react';
import {Menu, X } from 'lucide-react';

function Navbar(){
    const [isOpen , setIsOpen] = useState(false);
     const navlinks  = [
        {name:'Home',href:'#home'},
        {name:'About',href:'#about'},
        {name:'Skills',href:'#skills'},
        {name:'Projects',href:'#projects'},
        {name:'Certifications',href:'#certifications'},
        {name: 'Contact',href:'#contact'},


    ];
    const links = navlinks.map((link) =>(
        <a href={link.href}
         key={link.name} 
          onClick={()=> setIsOpen(false)} 
         className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300">
           
            {link.name}
        </a>
    ))
        return (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">

    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

      {/* Brand */}
      <a href="#home" className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-200">
          MP
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            MyPortfolio
          </h1>

          <p className="text-xs text-slate-500">
            IT • Web Development • Cloud
          </p>
        </div>

      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {links}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-slate-100"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

    </div>

    {/* Mobile Navigation */}
    {isOpen && (
      <div className="md:hidden px-6 pb-5 flex flex-col gap-5">
        {links}
      </div>
    )}

  </nav>

    );
}

export default Navbar;