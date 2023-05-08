import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>copyright</p>
            </footer>
        </div>
    )
}

// export function Head() {
//     return (
//         <head>
//         <title>Home Pagise</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet"></link>
//         <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
//         <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
//         <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
// </head>        
//     )
// }