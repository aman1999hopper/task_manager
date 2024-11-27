const ScrollableAds = () => {
  const ads = [
    { title: "Google", link: "https://www.google.com", icon: "fab fa-google", iconColor: "text-yellow-500", titleColor: "text-yellow-600" },
    { title: "Reddit", link: "https://www.reddit.com", icon: "fab fa-reddit", iconColor: "text-orange-600", titleColor: "text-orange-700" },
    { title: "Twitter", link: "https://twitter.com", icon: "fab fa-twitter", iconColor: "text-blue-400", titleColor: "text-blue-500" },
    { title: "LinkedIn", link: "https://linkedin.com", icon: "fab fa-linkedin", iconColor: "text-blue-600", titleColor: "text-blue-700" },
    { title: "Instagram", link: "https://instagram.com", icon: "fab fa-instagram", iconColor: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500", titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-orange-500" },
    { title: "Facebook", link: "https://facebook.com", icon: "fab fa-facebook", iconColor: "text-blue-600", titleColor: "text-blue-700" },
  ];

  return (
    <div className="w-full border border-gray-300 p-4 bg-white dark:bg-gray-900 rounded">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Sponsored Ads
      </h2>
      <div className="flex space-x-6 justify-center gap-36">
        {ads.map((ad, index) => (
          <a
            key={index}
            href={ad.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2 transition-transform duration-300"
          >
            {/* Icon */}
            <i
              className={`${ad.icon} ${ad.iconColor} text-4xl group-hover:scale-110 transition-transform duration-300`}
            ></i>

            {/* Title */}
            <span className={`${ad.titleColor} text-sm`}>
              {ad.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollableAds;
