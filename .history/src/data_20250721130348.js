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
  products:[
    {
      id: 1,
      title: 'Apple Watch Series 4',
      price: '$120.00',
      image: '/images/bidapplewatch.png',
      rating: 4,
      reviews: 131,
    },
    {
      id: 2,
      title: 'Apple Watch Series 4',
      price: '$120.00',
      image: '/images/bidapplewatch.png',
      rating: 4,
      reviews: 131,
    },
    {
      id: 3,
      title: 'Apple Watch Series 4',
      price: '$120.00',
      image: '/images/bidapplewatch.png',
      rating: 4,
      reviews: 131,
    }
  ]
};

export default data;