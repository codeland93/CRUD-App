// src/App.jsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsList from './components/PostsList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Posts</h1>
        <PostsList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
