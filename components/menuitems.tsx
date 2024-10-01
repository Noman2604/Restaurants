'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
}

type MenuCategory = {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Starters",
    items: [
      { id: 1, name: "Bruschetta", description: "Toasted bread with tomatoes, garlic, and basil", price: 8.99 },
      { id: 2, name: "Calamari", description: "Fried squid with marinara sauce", price: 10.99 },
      { id: 3, name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 9.99 },
      { id: 4, name: "Bruschetta", description: "Toasted bread with tomatoes, garlic, and basil", price: 8.99 },
      { id: 5, name: "Calamari", description: "Fried squid with marinara sauce", price: 10.99 },
      { id: 6, name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 9.99 },
    ]
  },
  {
    name: "Main Courses",
    items: [
      { id: 7, name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella, and basil", price: 14.99 },
      { id: 8, name: "Spaghetti Carbonara", description: "Pasta with eggs, cheese, pancetta, and black pepper", price: 16.99 },
      { id: 9, name: "Grilled Salmon", description: "Fresh salmon with lemon butter sauce and vegetables", price: 22.99 },
      { id: 10, name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella, and basil", price: 14.99 },
      { id: 11, name: "Spaghetti Carbonara", description: "Pasta with eggs, cheese, pancetta, and black pepper", price: 16.99 },
      { id: 12, name: "Grilled Salmon", description: "Fresh salmon with lemon butter sauce and vegetables", price: 22.99 },
    ]
  },
  {
    name: "Desserts",
    items: [
      { id: 13, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 7.99 },
      { id: 14, name: "Panna Cotta", description: "Italian cream dessert with berry compote", price: 6.99 },
      { id: 15, name: "Gelato", description: "Assorted flavors of Italian ice cream", price: 5.99 },
      { id: 16, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 7.99 },
      { id: 17, name: "Panna Cotta", description: "Italian cream dessert with berry compote", price: 6.99 },
      { id: 18, name: "Gelato", description: "Assorted flavors of Italian ice cream", price: 5.99 },
    ]
  }
];

export default function MenuPage() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col items-start md:flex-row min-h-screen ">
      {/* Mobile menu toggle button */}
      <Button
        variant="ghost"
        className="md:hidden"
        onClick={toggleSidebar}
      >
        <MenuIcon className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 h-[100vh] transition duration-200 ease-in-out md:w-64 p-6 border-r border-solid border-slate-400`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Menu</h2>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <CloseIcon className="h-6 w-6" />
          </Button>
        </div>

        <nav>
          {menuData.map((category, index) => (
            <Button
              key={category.name}
              variant={activeCategoryIndex === index ? "default" : "ghost"}
              className={`w-full justify-start hover:bg-slate-400 dark:hover:bg-slate-400 mb-2 ${
                activeCategoryIndex === index ? "bg-slate-400 dark:bg-slate-400" : ""
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.name}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto h-full max-h-screen md:ml-0 ml-0 mt-16 md:mt-0">
        <h1 className="text-4xl font-bold mb-8">Our Menu</h1>

        {/* Render the selected category items */}
        {activeCategoryIndex !== null && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{menuData[activeCategoryIndex].name}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {menuData[activeCategoryIndex].items.map((item) => (
                <Card key={item.id} className="border-slate-400">
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Show a prompt if no category is selected */}
        {activeCategoryIndex === null && (
          <p>Please select a category from the menu.</p>
        )}
      </div>
    </div>
  )
}