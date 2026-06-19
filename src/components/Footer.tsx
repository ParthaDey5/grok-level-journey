
function Footer() {
    return (

        <footer className="max-w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10 lg:tracking-wide tracking-wider" >

            {/* BG Wave */}
            <svg className="-mb-8 dark:fill-gray-600 fill-[#F7F8F9]" viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"  />
            </svg> 


            {/* Grid Container */}
            <div className="bg-[#f7f8f9] dark:bg-gray-600 mx-auto px-[5%] py-12 grid gap-8 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25%_10%_20%_30%] justify-between">

                {/* 1. Logo / About  */}
                <div>
                    <h2 className=" lg:text-2xl text-6xl font-bold text-gray-900 dark:text-white">Partha.dev</h2>
                    <p className="w-[30ch] lg:mt-3 mt-8 lg:text-sm text-3xl leading-relaxed">
                        Building modern web experiences with clean design and powerful tools.
                    </p>
                </div>

                {/* 2. Quick Links  */}
                <div>
                    <h3 className="lg:text-lg text-4xl font-semibold text-gray-900 dark:text-white">Quick Links</h3>
                    <ul className="lg:mt-4 mt-8 lg:space-y-2 space-y-8 lg:text-sm text-3xl">
                        <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">About</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">Services</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
                    </ul>
                </div>

                {/* 3. Contact / Social */}
                <div>
                    <h3 className="lg:text-lg text-4xl font-semibold text-gray-900 dark:text-white">Contact</h3>
                    <p className="lg:mt-4 mt-10 lg:text-sm text-3xl">Email: hello@example.com</p>
                    <p className="lg:mt-2 mt-6 lg:text-sm text-3xl">Phone: +123 456 7890</p>

                    <div className="flex lg:gap-4 gap-16 lg:mt-4 mt-10">
                        <a href="#" className="hover:text-blue-500 transition lg:text-xl text-6xl">🌐</a>
                        <a href="#" className="hover:text-blue-500 transition lg:text-xl text-6xl">🐦</a>
                        <a href="#" className="hover:text-blue-500 transition lg:text-xl text-6xl">💼</a>
                    </div>
                </div>

                {/* 4. Newsletter */}
                <div>
                    <h3 className="lg:text-lg text-4xl font-semibold text-gray-900 dark:text-white">Newsletter</h3>
                    <p className="lg:mt-4 mt-10 lg:text-sm text-3xl">Subscribe for updates</p>

                    <form className="lg:mt-4 mt-10 lg:text-sm text-3xl flex flex-col sm:flex-row lg:gap-2 gap-8">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="sm:w-[70%] w-full lg:px-3 lg:py-2 sm:px-5 sm:py-5 px-8 py-8 rounded-lg border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="sm:w-[30%] w-full lg:px-3 lg:py-2 sm:px-5 sm:py-5 px-8 py-8 lg:text-sm sm:text-2xl text-3xl bg-[#ef8200] text-white lg:rounded-lg rounded-2xl hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Copyright */}
            <div className="bg-[#F7F8F9] dark:bg-gray-600 border-t border-gray-300 dark:border-gray-700 text-center lg:py-4 py-12 lg:text-sm text-3xl ">
                © 2026 MyBrand. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer