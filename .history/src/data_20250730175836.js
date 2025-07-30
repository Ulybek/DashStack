import {
  FaTachometerAlt, FaBox, FaHeart, FaList, FaCubes, FaTags, FaCalendar,
  FaTasks, FaAddressBook, FaFileInvoice, FaPuzzlePiece, FaUsers, FaTable,
  FaCog, FaSignOutAlt
} from 'react-icons/fa';

const data = {
  menuItems: [
    {
      section: "main",
      items: [
        { id: "dashboard", label: "Dashboard", icon: FaTachometerAlt, path: '/dashboard' },
        { id: "products", label: "Products", icon: FaBox, path: '/products' },
        { id: "favorites", label: "Favorites", icon: FaHeart, path: '/favorites' },
        { id: "orderlists", label: "Order Lists", icon: FaList, path: '/orderlists' },
        { id: "productstock", label: "Product Stock", icon: FaCubes, path: '/productstock' },
      ],
    },
    {
      section: "pages",
      title: "PAGES",
      items: [
        { id: "pricing", label: "Pricing", icon: FaTags, path: '/pricing' },
        { id: "calendar", label: "Calendar", icon: FaCalendar, path: '/calendar' },
        { id: "todo", label: "To-Do", icon: FaTasks, path: '/todo' },
        { id: "contact", label: "Contact", icon: FaAddressBook, path: '/contact' },
        { id: "invoice", label: "Invoice", icon: FaFileInvoice, path: '/invoice' },
        { id: "uielements", label: "UI Elements", icon: FaPuzzlePiece, path: '/uielements' },
        { id: "team", label: "Team", icon: FaUsers, path: '/team' },
        { id: "table", label: "Table", icon: FaTable, path: '/table' },
      ],
    },
    {
      section: "bottom",
      items: [
        { id: "settings", label: "Settings", icon: FaCog, path: '/settings' },
        { id: "logout", label: "Logout", icon: FaSignOutAlt, path: '/logout' },
      ],
    },
  ],
  total_objects: [
    { id: 1, label: "Total User", number: "40,689", iconLight: `${import.meta.env.BASE_URL}images/totaluser-icon-light.png`, iconDark: `${import.meta.env.BASE_URL}images/totaluser-icon-dark.png`, pathImg: `${import.meta.env.BASE_URL}images/pathgrow.png`, percent: '8.5%', action: 'Up from yesterday' },
    { id: 2, label: "Total Order", number: "10,293", iconLight: `${import.meta.env.BASE_URL}images/totalorder-icon-light.png`, iconDark: `${import.meta.env.BASE_URL}images/totalorder-icon-dark.png`, pathImg: `${import.meta.env.BASE_URL}images/pathgrow.png`, percent: '8.5%', action: 'Up from yesterday' },
    { id: 3, label: "Total Sales", number: "$89,000", iconLight: `${import.meta.env.BASE_URL}images/totalsales-icon-light.png`, iconDark: `${import.meta.env.BASE_URL}images/totalsales-icon-dark.png`, pathImg: `${import.meta.env.BASE_URL}images/pathgrow.png`, percent: '4.3%', action: 'Down from yesterday' },
    { id: 4, label: "Total Pending", number: "2040", iconLight: `${import.meta.env.BASE_URL}images/totalpending-icon-light.png`, iconDark: `${import.meta.env.BASE_URL}images/totalpending-icon-dark.png`, pathImg: `${import.meta.env.BASE_URL}images/pathgrow.png`, percent: '8.5%', action: 'Up from yesterday' }
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
      productImg: `${import.meta.env.BASE_URL}images/applewatch.png`,
      location: '6096 Marjolaine Landing',
      dateTime: '12.09.2019 - 12.53 PM',
      piece: 423,
      amount: '$34,295',
      status: 'Delivered',
    },
    {
      id: 2,
      productName: 'Apple Watch',
      productImg: `${import.meta.env.BASE_URL}images/applewatch.png`,
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
    { id: 1, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Apple Watch Series 4', price: '$120.00', rating: 4, reviews: 131 },
    { id: 2, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Samsung Galaxy Watch', price: '$99.00', rating: 5, reviews: 89 },
    { id: 3, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Fitbit Versa 3', price: '$140.00', rating: 3, reviews: 56 },
    { id: 4, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Garmin Venu Sq', price: '$110.00', rating: 4, reviews: 78 },
    { id: 5, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Huawei Watch GT', price: '$89.00', rating: 4, reviews: 102 },
    { id: 6, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Xiaomi Watch S1', price: '$70.00', rating: 3, reviews: 63 },
    { id: 7, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Samsung Galaxy Watch', price: '$99.00', rating: 5, reviews: 89 },
    { id: 8, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Samsung Galaxy Watch', price: '$99.00', rating: 5, reviews: 89 },
    { id: 9, image: `${import.meta.env.BASE_URL}images/bigapplewatch.png`, title: 'Samsung Galaxy Watch', price: '$99.00', rating: 5, reviews: 89 }
  ],
  favorites: [
    { id: 1, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Apple Watch Series 4', price: '$120.00', rating: 4, reviews: 131 },
    { id: 2, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Samsung Galaxy Watch', price: '$99.00', rating: 5, reviews: 89 },
    { id: 3, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Fitbit Versa 3', price: '$140.00', rating: 3, reviews: 56 },
    { id: 4, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Garmin Venu Sq', price: '$110.00', rating: 4, reviews: 78 },
    { id: 5, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Huawei Watch GT', price: '$89.00', rating: 4, reviews: 102 },
    { id: 6, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Xiaomi Watch S1', price: '$70.00', rating: 3, reviews: 63 },
    { id: 7, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Apple Watch Series 4', price: '$120.00', rating: 4, reviews: 131 },
    { id: 8, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Samsung Galaxy Watch', price: '$99.00', rating: 5, reviews: 89 },
    { id: 9, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Fitbit Versa 3', price: '$140.00', rating: 3, reviews: 56 },
    { id: 10, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Garmin Venu Sq', price: '$110.00', rating: 4, reviews: 78 },
    { id: 11, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Huawei Watch GT', price: '$89.00', rating: 4, reviews: 102 },
    { id: 12, image: `${import.meta.env.BASE_URL}images/favapplewatch.png`, title: 'Xiaomi Watch S1', price: '$70.00', rating: 3, reviews: 63 }
  ],
  product_stock: [
    { image: `${import.meta.env.BASE_URL}images/applewatchseries4.png`, name: "Apple Watch Series 4", category: "Digital Product", price: 690, piece: 63, colors: ["#000000", "#C0C0C0", "#E0B0B0"] },
    { image: `${import.meta.env.BASE_URL}images/microsoftheadphones.png`, name: "Microsoft Headsquare", category: "Digital Product", price: 190, piece: 13, colors: ["#000000", "#FF99CC", "#6699FF", "#FFD700"] },
    { image: `${import.meta.env.BASE_URL}images/womendress.png`, name: "Women's Dress", category: "Fashion", price: 640, piece: 635, colors: ["#800020", "#87CEEB", "#0000FF"] },
    { image: `${import.meta.env.BASE_URL}images/samsunga50.png`, name: "Samsung A50", category: "Mobile", price: 400, piece: 67, colors: ["#000080", "#000000", "#800020"] },
    { image: `${import.meta.env.BASE_URL}images/camera.png`, name: "Camera", category: "Electronic", price: 420, piece: 52, colors: ["#000080", "#800020", "#FF0000"] }
  ]
};

export default data;