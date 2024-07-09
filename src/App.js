import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLAyout from './components/asnt-9/rootlayout/RootLAyout';
import Home from './components/asnt-9/home/Home';
import Signup from './components/asnt-9/signup/Signup'
import Technologies from './components/asnt-9/technologies/Technologies';
import ReactJs from './components/asnt-9/technologies/reactjs/ReactJs';
import Angular from './components/asnt-9/technologies/angular/Angular';
import Vue from './components/asnt-9/technologies/vue/Vue';
import Signin from './components/asnt-9/signin/Signin';
import ErrorElement from './components/asnt-9/ErrorElement';
function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLAyout />,
      errorElement:<ErrorElement />,
      children:[
        {
          path:'',
          element:<Home></Home>
        },
        {
          path:'home',
          element:<Home></Home>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        {
          path:'signin',
          element:<Signin />
        },
        {
          path:'technologies',
          element:<Technologies></Technologies>,
          children:[
            {
              path:'',
              element:<ReactJs></ReactJs>
            },
            {
              path:'reactjs',
              element:<ReactJs />
            },
            {
              path:'angular',
              element:<Angular />
            },
            {
              path:'vue',
              element:<Vue />
            }
          ]
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
