export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
  {
    name: "role",
    label: "Role",
    componentType: "select",
    options: [
      { id: "user", label: "User" },
      { id: "admin", label: "Artist" },
    ],
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "pencil", label: "Pencil-Sketch" },
      { id: "charcoal", label: "Charcoal-Sketch" },
      { id: "Canvas", label: "Canvas-Paint" },
      { id: "Paint", label: "Oil-Paint" },
      { id: "3D-Pait", label: "3D paint" },
    ],
  },
  {
    label: "Artist",
    name: "artist",
    componentType: "select",
    options: [
      { id: "raghav", label: "Raghav" },
      { id: "lonard", label: "Lonard" },
      { id: "leo", label: "leo" },
      { id: "zara", label: "Zara" },
      { id: "lorence", label: "lorence" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },

  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  pencil: "Pencil",
  charcoal: "charcoal",
  Canvas: "Canvas-Paint",
  Paint: "Oil-Paint",
  pait3D: "3D-Pait",
};

export const brandOptionsMap = {
  raghav: "Raghav",
  lonard: "Lonard",
  leo: "Leo",
  zara: "Zara",
  lorence: "Lorence",
  
};

export const filterOptions = {
  category: [
    { id: "pencil", label: "Pencil-Sketch" },
    { id: "charcoal", label: "Charcoal-Sketch" },
    { id: "Canvas", label: "Canvas-Paint" },
    { id: "Paint", label: "Oil-Paint" },
    { id: "3D-Pait", label: "3D paint" },
  ],
  brand: [
    { id: "raghav", label: "Raghav" },
    { id: "lonard", label: "Lonard" },
    { id: "leo", label: "leo" },
    { id: "zara", label: "Zara" },
    { id: "lorence", label: "lorence" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
