
"use client";

export default function WebsiteFooter_GOYMA() {
  return (
    <footer className="bg-gray-200 dark:bg-black p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="https://github.com/shadcn.png" alt="@shadcn" className="w-16 h-16 rounded-full object-cover" />
          <p className="mt-2 dark:text-white">Connecting the world one code at a time.</p>
        </div>
        <div>
          <h3 className="font-bold dark:text-white">Links</h3>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:underline">Home</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:underline">About Us</a></li>
              <li><a href="#services" className="text-gray-600 dark:text-gray-300 hover:underline">Services</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="font-bold dark:text-white">Subscribe</h3>
          <form className="mt-4 flex flex-col gap-4">
            <input placeholder="Email" type="email" className="py-2 px-4 rounded dark:bg-gray-700 dark:text-white" />
            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Subscribe</button>
          </form>
        </div>
        <div>
          <h3 className="font-bold dark:text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-4 dark:text-white">
            <a href="https://twitter.com" className="h-5 w-5">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.194-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.919 0 .386.045.763.13 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.724-.666 1.564-.666 2.465 0 1.701.869 3.2 2.188 4.078-.806-.026-1.566-.247-2.228-.617-.05 1.566 1.11 3.042 2.781 3.371-.273.074-.564.111-.859.111-.21 0-.415-.02-.615-.056.416 1.305 1.624 2.256 3.055 2.283-1.12.878-2.533 1.398-4.067 1.398-.264 0-.525-.016-.782-.045 1.45 9.28 11.26 13.58 21.17 13.58 2.54 0 4.93-.745 6.94-2.04-1.76 1.06-3.96 1.67-6.25 1.67-1.12 0-2.66-.13-3.92-.38 2.36 1.51 5.16 2.39 8.16 2.39 9.8 0 15.16-8.11 15.16-15.16 0-.23 0-.46-.02-.69 1.04-.75 1.95-1.69 2.66-2.74z"/></svg>
            </a>
            <a href="https://facebook.com" className="h-5 w-5">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M24 1.326v21.348c0 .73-.593 1.326-1.326 1.326H1.326A1.325 1.325 0 010 22.674V1.326C0 .595.593 0 1.326 0h21.348C23.407 0 24 .595 24 1.326zM7.684 8.214H5.579v3.107h2.105V20h4.21v-8.679h2.842s.266-1.684.407-3.107h-3.249V7.158c0-.213.577-.526 1.158-.526h2.091V4.024s-1.895-.327-3.708-.327c-3.897 0-6.341 2.368-6.341 5.491v2.026z"/></svg>
            </a>
            <a href="https://instagram.com" className="h-5 w-5">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm4.25 5.25a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zm0 7a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zM17.375 6.1a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"/></svg>
            </a>
            <a href="https://dribbble.com" className="h-5 w-5">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5"><path d="M12,24C5.373,24,0,18.627,0,12S5.373,0,12,0s12,5.373,12,12S18.627,24,12,24z M12,1.103c-6.016,0-10.897,4.881-10.897,10.897S5.984,22.897,12,22.897S22.897,18.016,22.897,12S18.016,1.103,12,1.103z"/><path d="M18.74,7.384c-0.638-0.215-2.451-0.821-4.703-0.887c-0.011,0.029-0.018,0.061-0.03,0.09 c-1.902,4.555-3.638,8.256-4.276,9.558c-0.007-0.015-0.017-0.028-0.024-0.043c1.036-0.316,2.121-0.641,3.239-0.939 c1.009-0.269,2.025-0.54,3.054-0.803c0.379-0.097,0.756-0.191,1.132-0.292c0.101-0.028,0.202-0.057,0.304-0.085 c0,0,0,0,0,0c1.015-5.034,2.816-8.314,3.202-9.225C18.769,7.595,18.763,7.477,18.74,7.384z"/><path d="M10.482,16.912c-1.135,0.308-2.238,0.651-3.317,0.981c-1.117,0.343-2.185,0.677-3.175,1.003 c0.195,0.514,0.467,1.025,0.805,1.51c1.365,1.965,3.293,3.043,5.325,3.216c0.315-1.285,1.574-5.174,2.946-9.379 C11.516,16.385,10.985,16.637,10.482,16.912z"/><path d="M12,2.155c-1.331,0.016-3.241,0.175-4.593,0.64c-0.42,0.145-0.755,0.317-1.049,0.51 c-0.124,2.037-0.079,4.985,0.554,7.875c0.634-1.3,2.372-5.002,4.274-9.556C11.249,2.251,11.6,2.199,12,2.155z"/><path d="M13.518,2.553c1.998,4.364,3.687,9.33,4.27,11.877c1.343-0.408,3.856-1.278,5.109-2.692 c-0.388-0.913-2.189-4.193-3.205-9.227c-0.098,0.022-0.193,0.054-0.292,0.081c-0.376,0.1-0.753,0.195-1.133,0.293 c-1.029,0.262-2.045,0.534-3.054,0.803C15.235,2.89,13.881,2.713,13.518,2.553z"/><path d="M6.104,19.617c0.988-0.326,2.056-0.661,3.173-1.003c1.079-0.331,2.182-0.673,3.317-0.981 c0.504-0.275,1.034-0.527,1.565-0.778c-1.373,4.205-2.631,8.095-2.946,9.379c-0.004,0.014-0.007,0.027-0.011,0.04 C11.322,24.193,9.365,23.096,6.104,19.617z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center dark:text-white">
        © 2023 All rights reserved.
      </div>
    </footer>
  );
}