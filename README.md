# Angular Products App

A simple Angular application to manage products. This project demonstrates the basics of Angular, including components, services, two-way binding, event handling, and basic styling.

---

## **Features**
* Display a list of products
* Add a new product with a form
* Delete a product from the list
* Use Angular Service to fetch initial data
* Basic CSS styling for a clean layout

## **Project Structure**
angular-products-full/
├── src/
│   ├── app/
│   │   ├── products/             # Products component
│   │   │   ├── products.component.ts
│   │   │   ├── products.component.html
│   │   │   └── products.component.css
│   │   ├── services/             # Services
│   │   │   └── product.service.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json

## **Installation**
1. Make sure you have **Node.js** and **Angular CLI** installed.
   npm install -g @angular/cli

2. Clone the repository:
   git clone git@github.com:hesbonangwenyi606/angular-products-full.git
   cd angular-products-full

3. Install dependencies:
   npm install

## **Running the Project**
Start the development server:
ng serve
Open your browser and go to:
http://localhost:4200/
The app will automatically reload if you change any of the source files.

## **Usage**
* **View Products**: All products fetched from the service are displayed.
* **Add Product**: Use the form to add a new product. Enter the name and price, then click **Add Product**.
* **Delete Product**: Click the **Delete** button next to any product to remove it.

---

## **Technologies Used**

* Angular 16
* TypeScript
* HTML & CSS
* Angular Services & Components
* Two-way Binding
* Event Handling

---

## **Future Improvements**

* Implement routing to multiple pages
* Add API calls to fetch real product data
* Add edit/update functionality
* Add search/filter functionality
* Improve UI design using Angular Material or Tailwind CSS

---

## **License**

This project is open source and available under the MIT License.
