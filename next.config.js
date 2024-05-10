module.exports = {
  // Can be safely removed in newer versions of Next.js
  future: {
    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
    webpack5: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "i.postimg.cc",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "img.freepik.com",
      "res.cloudinary.com",
    ],
  },
  webpack(config) {
    config.resolve.fallback = {
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    };

    return config;
  },
};
