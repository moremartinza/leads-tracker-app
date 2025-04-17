# Leads Tracker 🚀

Leads Tracker is a Progressive Web App (PWA) designed to help users easily manage and track their business leads. This app provides an intuitive interface to add, store, and delete leads, as well as seamlessly switching between light and dark modes for an enhanced user experience.

## 🔗 Live Demo

Try out Leads Tracker now: [https://elegant-beignet-5fc595.netlify.app/](https://elegant-beignet-5fc595.netlify.app/)

## 📋 Features

- **Add New Lead**: Users can input a new lead by providing the lead URL (e.g., a company site link).
- **View Saved Leads**: All saved leads are displayed in a list, showing clickable links.
- **Delete All Leads**: A convenient button to delete all saved leads in one click.
- **Responsive**: Fully responsive design optimized for both mobile and desktop views.
- **Light & Dark Mode**: Toggle between light and dark mode depending on user preference or system settings.
- **PWA Support**: The app works offline as a Progressive Web App, allowing users to install and use it on any device with the same experience as a native app.
- **Real-time sync:** All data is stored in Firebase and syncs across devices

## 🛠️ Technologies Used

- **Frontend**:

  - HTML5
  - CSS (Tailwind CSS for styling)
  - JavaScript (ES6+)
  - Firebase for storing and managing leads
  - PWA (Progressive Web App) features

- **Features**:
  - Firebase Database (Realtime Database) for lead storage
  - Tailwind CSS for responsive styling and utility-first design
  - Tailwind Dark Mode support
  - Modern JavaScript syntax (ES6+) for improved readability and maintainability

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Firebase account (for database access)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/leads-tracker.git
   cd leads-tracker
   ```

2. Set up Firebase:

   - Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
   - Set up a Realtime Database
   - Update the `firebaseConfig` in `app.js` with your database URL:
     ```javascript
     const firebaseConfig = {
       databaseURL: "YOUR_DATABASE_URL_HERE",
     };
     ```

3. Serve the application:
   You can use any static file server. For quick development:
   ```bash
   npx serve
   ```

### Firebase Setup Details

1. Navigate to the Firebase console
2. Create a new project
3. Set up Realtime Database
4. Set your database rules to:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
   Note: These are permissive rules for development. Adjust for production.

## 🔧 Usage

1. Enter a URL in the input field
2. Click "SAVE LEAD" to store it
3. Click any stored URL to open it in a new tab
4. Double-click "DELETE ALL" to remove all leads

## 🖌️ Customization

### Modifying Colors

The application uses TailwindCSS with a green color scheme. To change the colors, modify the color classes in `index.html`.

### Adding New Features

Some ideas for extending the application:

- Add lead categorization
- Implement user authentication
- Add lead notes and status tracking
- Implement browser extension functionality

## 📱 Progressive Web App

The application includes manifest settings for PWA capabilities. Icons should be placed in the root directory:

- `/favicon-16x16.png`
- `/favicon-32x32.png`
- `/apple-touch-icon.png`
- `/android-chrome-192x192.png`
- `/android-chrome-512x512.png`

## 🔒 Security Notes

For production use, consider:

1. Implementing authentication before accessing database
2. Restricting Firebase database rules
3. Adding data validation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Firebase for the real-time database functionality
- TailwindCSS for the styling utilities
