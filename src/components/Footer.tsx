
function Footer() {
    return (

        <footer className="max-w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10 lg:tracking-wide tracking-wider" >

            {/* BG Wave */}
            <svg className="-mb-8 dark:fill-gray-600 fill-[#F7F8F9]" viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z" />
            </svg>


            {/* Grid Container */}
            <div className="bg-[#f7f8f9] dark:bg-gray-600 mx-auto px-[5%] py-12 grid gap-8 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25%_10%_20%_30%] justify-between">

                {/* 1. Logo / About  */}
                <div>
                    <h2 className=" lg:text-2xl sm:text-5xl text-6xl font-bold text-gray-900 dark:text-white">Partha.dev</h2>
                    <p className="w-[30ch] lg:mt-3 mt-8 lg:text-sm sm:text-2.125xl text-3xl leading-relaxed">
                        Building modern web experiences with clean design and powerful tools.
                    </p>
                </div>

                {/* 2. Quick Links  */}
                <div>
                    <h3 className="lg:text-lg sm:text-3xl text-4xl font-semibold text-gray-900 dark:text-white">Quick Links</h3>
                    <ul className="lg:mt-4 mt-8 lg:space-y-2 space-y-8 lg:text-sm sm:text-2.5xl text-3xl">
                        <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">About</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">Services</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
                    </ul>
                </div>

                {/* 3. Contact / Social */}
                <div>
                    <h3 className="lg:text-lg sm:text-3xl text-4xl font-semibold text-gray-900 dark:text-white">Contact</h3>
                    <p className="lg:mt-4 mt-10 lg:text-sm sm:text-2.5xl text-3xl">Email: hello@example.com</p>
                    <p className="lg:mt-2 mt-6 lg:text-sm text-3xl">Phone: +123 456 7890</p>

                    <div className="flex lg:gap-4 gap-16 lg:mt-4 mt-10">
                        <a href="#" className="hover:text-blue-500 transition ">
                            {/* Facebook Icon */}
                            <svg className="lg:size-5 sm:size-12 size-16" fill="#000000" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                            {/* Github icon */}
                            <svg className="lg:size-5 sm:size-12 size-16" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                                <title>github [#142]</title>
                                <desc>Created with Sketch.</desc>
                                <defs>

                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                            {/* LinkedIn logo */}
                            <svg className="lg:size-5 sm:size-12 size-16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill="#000000" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                            {/* Instagram logo */}
                            <svg  className="lg:size-5 sm:size-12 size-16" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F" />
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* 4. Newsletter */}
                <div>
                    <h3 className="lg:text-lg sm:text-3xl text-4xl font-semibold text-gray-900 dark:text-white">Newsletter</h3>
                    <p className="lg:mt-4 mt-10 lg:text-sm sm:text-2.5xl text-3xl">Subscribe for updates</p>

                    <form className="lg:mt-4 mt-10 lg:text-sm sm:text-2.5xl text-3xl flex flex-col sm:flex-row lg:gap-2 gap-8">
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
            <div className="bg-[#F7F8F9] dark:bg-gray-600 border-t border-gray-300 dark:border-gray-700 text-center lg:py-4 py-12 lg:text-sm sm:text-2.5xl text-3xl ">
                © 2026 MyBrand. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer