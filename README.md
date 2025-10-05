
# Todo App - MERN Stack Application

A full-stack Todo application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a modern, responsive design and real-time CRUD operations.

## 🚀 Features

- **Create Todos**: Add new tasks with title, description, date, and time
- **Read Todos**: View all tasks in an organized list
- **Update Todos**: Mark tasks as complete (checkbox functionality)
- **Delete Todos**: Remove tasks with a single click
- **Real-time Updates**: Automatic UI refresh after operations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with Tailwind CSS styling

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Axios** - HTTP client for API calls
- **React Icons** - Beautiful icons (FaTrashAlt, FaBusinessTime, FaCalendarAlt)
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database service
- **Mongoose** - MongoDB object modeling

## 📁 Project Structure


todo-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Todo.jsx    # Individual todo component
│   │   │   ├── Todos.jsx   # Todo list container
│   │   │   └── NewTodo.jsx # Add todo form
│   │   ├── pages/
│   │   │   └── Home.jsx    # Main application page
│   │   └── ...
├── server/                 # Express backend
│   ├── models/
│   │   └── Todo.js         # MongoDB schema
│   ├── routes/
│   │   └── todos.js        # API routes
│   └── ...
└── README.md


## 🎯 Component Architecture

### Frontend Components

#### Home.jsx
- Main container component
- Manages global state and data fetching
- Coordinates between NewTodo and Todos components
- Handles refresh triggers for real-time updates

#### NewTodo.jsx
- Form component for adding new todos
- Form validation and submission handling
- Controlled form inputs with React state
- Success feedback and form reset

#### Todos.jsx
- Container for displaying todo list
- Conditional rendering (empty state vs todo list)
- Maps through data to render individual Todo components

#### Todo.jsx
- Individual todo item display
- Delete functionality with confirmation
- Checkbox for completion status
- Displays title, description, date, and time

### Backend API

#### RESTful Endpoints
- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create new todo
- `DELETE /api/todos/:id` - Delete specific todo

#### Data Model
```javascript
{
  _id: ObjectId,
  title: String,
  desc: String,
  taskDate: String,    // Format: YYYY-MM-DD
  taskTime: String,    // Format: HH:MM
  createdAt: Date,
  updatedAt: Date
}


## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

3. **Environment Configuration**
   Create `.env` file in server directory:
   ```env
   PORT=3001
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

4. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd server
   npm start
   ```
   Server runs on http://localhost:3001

2. **Start Frontend Development Server**
   ```bash
   cd client
   npm start
   ```
   Client runs on http://localhost:3000

## 🔧 API Documentation

### Get All Todos
```http
GET /api/todos
```
Response: Array of todo objects

### Create Todo
```http
POST /api/todos
Content-Type: application/json

{
  "title": "Task title",
  "desc": "Task description",
  "taskDate": "2023-12-01",
  "taskTime": "14:30"
}
```

### Delete Todo
```http
DELETE /api/todos/:id
```

## 🎨 UI/UX Features

- **Responsive Grid Layout**: Adapts to different screen sizes
- **Color-coded Sections**: 
  - Green theme for adding new tasks
  - Lime background for task list
  - Gray cards for individual tasks
- **Interactive Elements**: Hover effects and smooth transitions
- **Empty State Handling**: User-friendly messages when no tasks exist
- **Form Validation**: Required field validation with visual feedback

## 🔄 State Management

- **React Hooks**: useState for local state, useEffect for side effects
- **Prop Drilling**: Data flow from parent to child components
- **Callback Functions**: Child-to-parent communication for state updates
- **Optimistic Updates**: Immediate UI feedback with backend sync

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your preferred hosting service

### Backend (Heroku/Railway)
1. Set environment variables in deployment platform
2. Deploy the server directory
3. Configure CORS for your frontend domain

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS is configured for frontend URL
2. **MongoDB Connection**: Verify connection string in environment variables
3. **Port Conflicts**: Check if ports 3000 and 3001 are available
4. **API Endpoints**: Confirm backend URL matches frontend API calls

### Debugging Tips
- Check browser console for errors
- Verify network requests in Developer Tools
- Confirm MongoDB Atlas IP whitelisting
- Validate environment variables

## 📝 Future Enhancements

- [ ] User authentication and authorization
- [ ] Task categories and tags
- [ ] Due date notifications
- [ ] Task search and filtering
- [ ] Drag and drop prioritization
- [ ] Task sharing and collaboration
- [ ] Data export functionality
- [ ] Dark mode theme

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS approach
- MongoDB Atlas for cloud database services
- React Icons for the beautiful icon set

---

**Note**: This project is for demonstration purposes and can be extended with additional features based on requirements.
```