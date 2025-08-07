# 🌤 Weather Pro

A beautiful, modern weather application built with React and Vite. Get real-time weather information for any city with a stunning glassmorphism UI and dark/light mode toggle.

![Weather Pro Screenshot](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- **🌍 Real-time Weather Data** - Get current weather for any city worldwide
- **🌙 Dark/Light Mode Toggle** - Beautiful theme switching with smooth transitions
- **🎨 Glassmorphism Design** - Modern UI with backdrop blur effects
- **📱 Responsive Design** - Works perfectly on desktop and mobile devices
- **⚡ Fast & Lightweight** - Built with Vite for optimal performance
- **🔍 Search Functionality** - Easy city search with autocomplete
- **💾 Persistent Settings** - Remembers your theme preference

## 🚀 Live Demo

[View Live Demo](https://weather-pro-demo.netlify.app)

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: CSS3 with Glassmorphism effects
- **Weather API**: OpenWeatherMap API
- **State Management**: React Context API
- **Icons**: Custom SVG icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   VITE_WEATHER_KEY=your_openweathermap_api_key
   ```

4. **Get your API key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key
   - Add it to the `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

1. **Search for a city** - Enter any city name in the search box
2. **Get weather info** - Click "Get Weather" to fetch current conditions
3. **Toggle theme** - Click the sun/moon icon to switch between light and dark modes
4. **View details** - See temperature, humidity, wind speed, and weather description

## 🎨 Features in Detail

### 🌙 Dark/Light Mode
- **Light Mode**: Purple gradient with light glassmorphism
- **Dark Mode**: Deep blue gradient with dark glassmorphism
- **Smooth Transitions**: All elements animate smoothly between themes
- **Persistent**: Your theme preference is saved in localStorage

### 🎨 Glassmorphism Design
- **Backdrop Blur**: Modern frosted glass effect
- **Transparency**: Semi-transparent elements
- **Shadows**: Subtle depth and elevation
- **Gradients**: Beautiful background gradients

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Flexible Layout**: Adapts to different viewport sizes
- **Touch-Friendly**: Large touch targets for mobile users

## 🏗️ Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   └── DarkModeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useWeather.js
│   ├── services/
│   │   └── weatherService.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

This app uses the **OpenWeatherMap API** to fetch weather data:

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: City name, units (metric), API key
- **Response**: Current weather data in JSON format

## 🎯 Key Components

### `ThemeContext.jsx`
- Manages dark/light mode state
- Persists theme preference in localStorage
- Provides theme toggle functionality

### `useWeather.js`
- Custom hook for weather data fetching
- Handles loading states and error management
- Integrates with OpenWeatherMap API

### `WeatherCard.jsx`
- Displays weather information
- Responsive design with glassmorphism
- Shows temperature, humidity, wind, and weather icon

### `DarkModeToggle.jsx`
- Beautiful toggle button with SVG icons
- Smooth animations and hover effects
- Accessible with proper ARIA labels

## 🎨 Customization

### Colors
The app uses CSS custom properties for easy theming:
```css
:root {
  --primary-color: #646cff;
  --secondary-color: #535bf2;
  --background-light: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --background-dark: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}
```

### Styling
- Modify `App.css` for component styles
- Update `index.css` for global styles
- Edit `global.css` for base styles

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variable: `VITE_WEATHER_KEY`

### Vercel
1. Import your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_WEATHER_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Glassmorphism](https://glassmorphism.com/) for design inspiration

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me at your.email@example.com
- Check the [documentation](https://github.com/yourusername/weather-app/wiki)

---

⭐ **Star this repository if you found it helpful!**
