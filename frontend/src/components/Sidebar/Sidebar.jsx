
const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-56 h-full pt-4 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <span className="bg-gradient-to-r from-blue-500 to-rose-600 text-transparent bg-clip-text text-xl font-bold ml-3">StockHaven</span>
        <div className="h-full px-3 pb-4 overflow-y-auto pt-4">
          {/* Sidebar Links */}
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
                <span className="ml-3">Settings</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 2a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2H3zm14 14H3V4h14v12z"></path>
                </svg>
                <span className="ml-3">Messages</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pl-56">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-end items-center fixed w-10/12">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User photo"
            />
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-16 overflow-y-auto mt-4">
          <h1 className="text-3xl">Main Content</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis explicabo placeat fuga non dicta architecto voluptatum, sed quam reiciendis illo, ipsam dolores in laudantium expedita velit recusandae, fugiat nostrum eligendi magnam. Inventore sapiente nulla modi ut velit doloremque quae rem ipsum sunt fugiat. Quae maiores necessitatibus eveniet non perferendis harum aliquid vitae voluptatem velit commodi! Suscipit voluptatem a beatae similique excepturi fugit rem, distinctio nihil nostrum cumque. Alias qui id ipsum ipsa nesciunt, sint cupiditate possimus similique, harum veritatis vero enim optio fugiat laudantium nam suscipit molestias quaerat eaque fugit distinctio. Nihil incidunt pariatur iure impedit obcaecati deleniti beatae reiciendis explicabo ipsam repellat, aut distinctio et dicta doloremque dolor, esse ut possimus. Officia itaque aspernatur eligendi provident veritatis, harum repudiandae accusamus voluptatum laborum explicabo sunt doloribus vitae quibusdam. Totam doloribus iure sunt, autem quod architecto delectus veritatis dolor. Itaque praesentium quibusdam nostrum quisquam. Voluptatum omnis reiciendis tenetur dolore fugiat saepe ipsa! Optio doloremque esse recusandae ea tempore mollitia fugiat aliquam? Error, mollitia accusantium veniam tempora explicabo earum optio eum quod cumque doloremque sequi reprehenderit fugit pariatur ab aspernatur facilis sapiente iusto ipsam soluta facere repudiandae. Minus recusandae eligendi provident, eum, error dolores voluptatum, distinctio nostrum dolorum ab cupiditate harum sed non cumque corporis magni illum ut laudantium enim quasi perspiciatis nobis! Mollitia sint aut officia suscipit excepturi vitae quasi. Ducimus, quod! Adipisci, labore dignissimos error qui repellendus veniam blanditiis aspernatur suscipit quibusdam inventore, libero velit alias eligendi saepe tempore ullam, in repudiandae laborum enim beatae rerum iure minima voluptatibus id. Nostrum hic, officiis ab minima tempora suscipit vitae delectus beatae nesciunt voluptas cupiditate veritatis labore consectetur porro? Doloremque beatae laborum a qui corrupti repellendus itaque alias ipsa est? Doloremque laudantium porro corrupti dolorem aperiam dolore alias perferendis voluptatum dolorum esse labore molestiae hic et suscipit, illum temporibus a nisi! Quo omnis laboriosam vel debitis quam aperiam earum, atque tempora aliquam hic cupiditate blanditiis dolorum dolore tenetur veritatis ipsum error nulla aut provident doloremque architecto repudiandae magnam eos! Incidunt corporis a rem ratione ab dolorem, cum tempora omnis molestias, repellendus eaque aut soluta! Repudiandae, quas fugiat magni quos rerum nulla earum odio voluptates eligendi laboriosam quisquam! Rerum maxime corporis velit minima, consequuntur praesentium quod aliquam quos quisquam molestiae, quam odio suscipit obcaecati beatae delectus repellat accusamus quae fuga excepturi inventore autem explicabo voluptate incidunt enim. Odit repellendus ex ratione fuga cupiditate repellat nobis cum optio architecto rerum perspiciatis ullam consequuntur ut porro, consequatur doloremque voluptatibus iure sapiente harum in veniam nesciunt! Tenetur deleniti quibusdam ut commodi amet ipsam beatae iste necessitatibus quasi. Provident deleniti vero sed, vel esse numquam culpa blanditiis veritatis doloremque iste qui soluta quae eveniet dicta sapiente nostrum, labore voluptas officia quaerat, quisquam cum ad ullam molestias! Doloribus quaerat, rem ratione deleniti excepturi amet assumenda quis. Tempore architecto temporibus laboriosam magnam rerum consequatur, praesentium fugiat culpa ipsam dolor reiciendis inventore, vel saepe molestiae porro eum eveniet quaerat ullam asperiores minus? Soluta asperiores quasi voluptatem placeat, beatae sapiente voluptates sed, necessitatibus, adipisci deleniti incidunt impedit a possimus blanditiis.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
