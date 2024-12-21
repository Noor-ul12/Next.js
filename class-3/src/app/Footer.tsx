const Footer = () => {
    return(
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4 md:px-8 lg:px-16">

    <div className="flex flex-col items-center md:items-start mb-8">
      <h1 className="text-3xl font-bold mb-2">Bigneair</h1>
      <p className="text-gray-400 text-center md:text-left">
        Building seamless experiences with clean design and functionality.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
      
      <div>
        <h2 className="text-lg font-semibold mb-4">About</h2>
        <ul>
          <li><a href="#" className="hover:underline">Company</a></li>
          <li><a href="#" className="hover:underline">Team</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
        </ul>
      </div>
      
    
      <div>
        <h2 className="text-lg font-semibold mb-4">Services</h2>
        <ul>
          <li><a href="#" className="hover:underline">Design</a></li>
          <li><a href="#" className="hover:underline">Development</a></li>
          <li><a href="#" className="hover:underline">Marketing</a></li>
        </ul>
      </div>
      
    
      <div>
        <h2 className="text-lg font-semibold mb-4">Resources</h2>
        <ul>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Help Center</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
      
      
      <div>
        <h2 className="text-lg font-semibold mb-4">Connect</h2>
        <ul className="flex justify-center md:justify-start space-x-4">
          <li><a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>


    <div className="mt-8 border-t border-gray-700 pt-6 text-center">
      <p className="text-sm text-gray-500">© 2024 Bigneair. All rights reserved.</p>
    </div>
  </div>
</footer>

    )
}

export default Footer;