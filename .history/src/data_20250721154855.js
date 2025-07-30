const data = {
  menuItems: [
    {
      section: "main",
      items: [
        { id: "dashboard", label: "Dashboard", icon: "dashboard", path: '/dashboard' },
        { id: "products", label: "Products", icon: "products", path: '/products' },
        { id: "favorites", label: "Favorites", icon: "favorites", path: '/favorites' },
        { id: "inbox", label: "Inbox", icon: "inbox", path: 'inbox' },
        { id: "orderlists", label: "Order Lists", icon: "orderlists", path: '/orderlists' },
        { id: "productstock", label: "Product Stock", icon: "productstock", path: '/productstock' },
      ],
    },
    {
      section: "pages",
      title: "PAGES",
      items: [
        { id: "pricing", label: "Pricing", icon: "pricing", path: '/pricing' },
        { id: "calendar", label: "Calendar", icon: "calendar", path: '/calendar' },
        { id: "todo", label: "To-Do", icon: "to-do", path: '/todo' },
        { id: "contact", label: "Contact", icon: "contact", path: '/contact' },
        { id: "invoice", label: "Invoice", icon: "invoice", path: '/invoice' },
        { id: "uielements", label: "UI Elements", icon: "UIElements", path: '/uielements' },
        { id: "team", label: "Team", icon: "team", path: '/team' },
        { id: "table", label: "Table", icon: "table", path: '/table' },
      ],
    },
    {
      section: "bottom",
      items: [
        { id: "settings", label: "Settings", icon: "settings", path: '/settings' },
        { id: "logout", label: "Logout", icon: "logout", path: '/logout' },
      ],
    },
  ],
  total_objects: [
    { id: 1, label: "Total User", number: "40,689", iconImg: '/images/totaluser-icon.png', pathImg: '/images/pathgrow.png', percent: '8.5%', action: 'Up from yesterday' },
    { id: 2, label: "Total Order", number: "10,293", iconImg: '/images/totalorder-icon.png', pathImg: '/images/pathgrow.png', percent: '8.5%', action: 'Up from yesterday' },
    { id: 3, label: "Total Sales", number: "$89,000", iconImg: '/images/totalsales-icon.png', pathImg: '/images/pathdown.png', percent: '4.3%', action: 'Down from yesterday' },
    { id: 4, label: "Total Pending", number: "2040", iconImg: '/images/totalpending-icon.png', pathImg: '/images/pathgrow.png', percent: '8.5%', action: 'Up from yesterday' }
  ],
  chart_data: [
    { name: '5k', value: 0.2 },
    { name: '10k', value: 0.45 },
    { name: '15k', value: 0.4 },
    { name: '20k', value: 0.85 },
    { name: '25k', value: 0.42 },
    { name: '30k', value: 0.58 },
    { name: '35k', value: 0.25 },
    { name: '40k', value: 0.6 },
    { name: '45k', value: 0.75 },
    { name: '50k', value: 0.66 },
    { name: '55k', value: 0.4 },
    { name: '60k', value: 0.52 },
  ],
  months: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  dealsData: [
    {
      id: 1,
      productName: 'Apple Watch',
      productImg: '/images/applewatch.png',
      location: '6096 Marjolaine Landing',
      dateTime: '12.09.2019 - 12.53 PM',
      piece: 423,
      amount: '$34,295',
      status: 'Delivered',
    },
    {
      id: 2,
      productName: 'Apple Watch',
      productImg: '/images/applewatch.png',
      location: '6096 Marjolaine Landing',
      dateTime: '12.09.2019 - 12.53 PM',
      piece: 423,
      amount: '$34,295',
      status: 'Delivered',
    }
  ],
  events: [
    {
      id: 1,
      date: 'September 12–22',
      title: 'Enjoy free home delivery in this summer',
      subtitle: 'Designer Dresses – Pick from trendy Designer Dress.',
      buttonText: 'Get Started',
    },
    {
      id: 2,
      date: 'September 12–22',
      title: 'Enjoy free home delivery in this summer',
      subtitle: 'Designer Dresses – Pick from trendy Designer Dress.',
      buttonText: 'Get Started',
    }
  ],
  products: [
    {
      id: 1,
      image: '/images/bigapplewatch.png',
      title: 'Apple Watch Series 4',
      price: '$120.00',
      rating: 4,
      reviews: 131,
    },
    {
      id: 2,
      image: '/images/bigapplewatch.png',
      title: 'Samsung Galaxy Watch',
      price: '$99.00',
      rating: 5,
      reviews: 89,
    },
    {
      id: 3,
      image: '/images/bigapplewatch.png',
      title: 'Fitbit Versa 3',
      price: '$140.00',
      rating: 3,
      reviews: 56,
    },
    {
      id: 4,
      image: '/images/bigapplewatch.png',
      title: 'Garmin Venu Sq',
      price: '$110.00',
      rating: 4,
      reviews: 78,
    },
    {
      id: 5,
      image: '/images/bigapplewatch.png',
      title: 'Huawei Watch GT',
      price: '$89.00',
      rating: 4,
      reviews: 102,
    },
    {
      id: 6,
      image: '/images/bigapplewatch.png',
      title: 'Xiaomi Watch S1',
      price: '$70.00',
      rating: 3,
      reviews: 63,
    },
    {
      id: 7,
      image: '/images/bigapplewatch.png',
      title: 'Samsung Galaxy Watch',
      price: '$99.00',
      rating: 5,
      reviews: 89,
    },
    {
      id: 8,
      image: '/images/bigapplewatch.png',
      title: 'Samsung Galaxy Watch',
      price: '$99.00',
      rating: 5,
      reviews: 89,
    },
    {
      id: 9,
      image: '/images/bigapplewatch.png',
      title: 'Samsung Galaxy Watch',
      price: '$99.00',
      rating: 5,
      reviews: 89,
    }
  ],
  favorites: [
    {
      id: 1,
      image: '/images/favapplewatch.png',
      title: 'Apple Watch Series 4',
      price: '$120.00',
      rating: 4,
      reviews: 131,
    },
    {
      id: 2,
      image: '/images/favapplewatch.png',
      title: 'Samsung Galaxy Watch',
      price: '$99.00',
      rating: 5,
      reviews: 89,
    },
    {
      id: 3,
      image: '/images/favapplewatch.png',
      title: 'Fitbit Versa 3',
      price: '$140.00',
      rating: 3,
      reviews: 56,
    },
    {
      id: 4,
      image: '/images/favapplewatch.png',
      title: 'Garmin Venu Sq',
      price: '$110.00',
      rating: 4,
      reviews: 78,
    },
    {
      id: 5,
      image: '/images/favapplewatch.png',
      title: 'Huawei Watch GT',
      price: '$89.00',
      rating: 4,
      reviews: 102,
    },
    {
      id: 6,
      image: '/images/favapplewatch.png',
      title: 'Xiaomi Watch S1',
      price: '$70.00',
      rating: 3,
      reviews: 63,
    }
  ]
};

export default data;