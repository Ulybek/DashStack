const data = {
  menuItems: [
    {
      section: "main",
      items: [
        { id: "dashboard", label: "Dashboard", icon: "dashboard" },
        { id: "products", label: "Products", icon: "products" },
        { id: "favorites", label: "Favorites", icon: "favorites" },
        { id: "inbox", label: "Inbox", icon: "inbox" },
        { id: "orderlists", label: "Order Lists", icon: "orderlists" },
        { id: "productstock", label: "Product Stock", icon: "productstock" },
      ],
    },
    {
      section: "pages",
      title: "PAGES",
      items: [
        { id: "pricing", label: "Pricing", icon: "pricing" },
        { id: "calendar", label: "Calendar", icon: "calendar" },
        { id: "todo", label: "To-Do", icon: "to-do" },
        { id: "contact", label: "Contact", icon: "contact" },
        { id: "invoice", label: "Invoice", icon: "invoice" },
        { id: "uielements", label: "UI Elements", icon: "UIElements" },
        { id: "team", label: "Team", icon: "team" },
        { id: "table", label: "Table", icon: "table" },
      ],
    },
    {
      section: "bottom",
      items: [
        { id: "settings", label: "Settings", icon: "settings" },
        { id: "logout", label: "Logout", icon: "logout" },
      ],
    },
  ],
  total_objects: [
    {
      items: [
        { id: 1, label: "Total User", number: "40,689", iconImg: '/images/totaluser-icon.png', pathImg: '/images/pathgrow.png', percent: '8.5%', action: 'Up from yesterday' },
        { id: 2, label: "Total Order", number: "10,293", iconImg: '/images/totalorder-icon.png', pathImg: '/images/pathgrow.png', percent: '8.5%', action: 'Up from yesterday' },
        { id: 3, label: "Total Sales", number: "$89,000", iconImg: '/images/totalsales-icon.png', pathImg: '/images/pathdown.png', percent: '8.5%', action: 'Up from yesterday' },
        { id: 4, label: "Total Pending", number: "2040", iconImg: '/images/totalpending-icon.png', pathImg: '/images/pathgrow.png', percent: '8.5%', action: 'Up from yesterday' }
      ]
    }
  ]
};

export default data;